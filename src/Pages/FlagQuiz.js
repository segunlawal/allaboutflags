import { useState } from 'react';
import QuizQuestions from './QuizQuestions';

function FlagQuiz(props) {
  const { allcountries } = props;

  const [startQuiz, setStartQuiz] = useState(false);

  return startQuiz ? (
    <QuizQuestions allcountries={allcountries} />
  ) : (
    <div>
      <button
        type="submit"
        onClick={() => {
          setStartQuiz(true);
        }}
        className="px-3 rounded-sm bg-yellow-400 "
      >
        Start
      </button>
    </div>
  );
}

export default FlagQuiz;
