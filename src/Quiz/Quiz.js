/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react';
import Result from './Result';

function Quiz(props) {
  const { quizQuestions } = props;
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const [showResult, setShowResult] = useState(false);
  const [userChoice, setUserChoice] = useState([]);
  const { question, choices, correctAnswer } = quizQuestions[activeQuestion];

  const onClickNext = () => {
    setSelectedAnswerIndex(null);
    setUserChoice([...userChoice, choices[selectedAnswerIndex]]);
    setResult(prev =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 1,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );
    if (activeQuestion !== quizQuestions.length - 1) {
      setActiveQuestion(prev => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
  };

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };

  const addLeadingZero = number => (number > 9 ? number : `0${number}`);

  return (
    <div className="">
      {!showResult ? (
        <div>
          <div>
            <div className="flex items-center justify-center mx-auto space-x-1">
              <span className="text-gray-300 font-medium text-lg">
                {addLeadingZero(activeQuestion + 1)}
              </span>
              <span className="text-gray-400 font-medium text-lg">/</span>
              <span className="text-gray-500 font-medium text-lg">
                {addLeadingZero(quizQuestions.length)}
              </span>
            </div>
          </div>
          <img src={question} alt="flag" className="mx-auto" />
          <ul>
            {choices.map((answer, index) => (
              <li
                onClick={() => onAnswerSelected(answer, index)}
                onKeyDown={event => {
                  if (event.key === 'Enter') {
                    onAnswerSelected(answer);
                  }
                }}
                key={answer}
                className={
                  selectedAnswerIndex === index
                    ? 'bg-[#1976d2] border-2 border-[#1976d2] sm:w-[30%] w-[70%] mx-auto py-3 my-3 rounded-md'
                    : 'border-2 sm:w-[30%] w-[70%] mx-auto py-3 my-3 rounded-md cursor-pointer'
                }
              >
                {answer}
              </li>
            ))}
          </ul>
          <div className="sm:w-[30%] w-[70%] mx-auto flex justify-end">
            <button
              type="button"
              onClick={onClickNext}
              disabled={selectedAnswerIndex === null}
              className="text-lg bg-gradient-to-b from-[#1976d2] to-transparent px-5 py-2 rounded-sm"
            >
              {activeQuestion === quizQuestions.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
      ) : (
        <Result
          quizQuestions={quizQuestions}
          result={result}
          userChoice={userChoice}
        />
      )}
    </div>
  );
}

export default Quiz;
