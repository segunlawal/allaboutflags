import { Button } from '@mui/material';

function Result(props) {
  const { quizQuestions, result, userChoice } = props;
  //   console.log(quizQuestions) ;
  console.log(userChoice);
  const centScored = (result.score / quizQuestions.length) * 100;

  // Collect all correct answers in an array
  // eslint-disable-next-line no-unused-vars
  const allCorrectAnswers = quizQuestions.map(
    quizQuestion => quizQuestion.correctAnswer
  );

  const correctionsMade = quizQuestions.map((oneQuestion, index) => (
    <div key={oneQuestion.correctAnswer} className="mx-auto">
      <img src={oneQuestion.question} alt="flag" className="w-60" />

      {oneQuestion.choices.map(answer => (
        <ul>
          <li
            key={answer}
            // eslint-disable-next-line no-nested-ternary
            // className={
            //   answer === quizQuestions[index].correctAnswer
            //     ? 'border-b-2 border-x-2 bg-green-600'
            //     : answer === userChoice[index]
            //     ? 'border-b-2 border-x-2 bg-red-600'
            //     : 'border-b-2 border-x-2'
            // }
            className="border-b-2 border-x-2"
          >
            <span className="flex justify-center gap-3">
              {answer}
              {answer === quizQuestions[index].correctAnswer && (
                // <p className="bg-green-600">correct</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 bg-green-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              )}
              {answer !== quizQuestions[index].correctAnswer &&
                answer === userChoice[index] && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 bg-red-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
            </span>
          </li>
        </ul>
      ))}
    </div>
  ));

  return (
    <div>
      <h3>Result</h3>
      <p>You scored {centScored}%!</p>
      <p>
        You got {result.score} out of {quizQuestions.length} questions
      </p>
      <Button
        variant="contained"
        type="submit"
        // onClick={() => {
        //   setStartQuiz(true);
        // }}
        className="px-3 rounded-sm"
      >
        Start New Quiz
      </Button>
      <div className="mt-5 grid lg:grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-1">
        {correctionsMade}
      </div>
    </div>
  );
}

export default Result;
