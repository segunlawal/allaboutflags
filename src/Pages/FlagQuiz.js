import { useState } from 'react';
import { Button } from '@mui/material';
import QuizQuestions from '../Quiz/QuizQuestions';

function FlagQuiz(props) {
  const { allcountries } = props;

  const [startQuiz, setStartQuiz] = useState(false);

  return startQuiz ? (
    <QuizQuestions allcountries={allcountries} />
  ) : (
    <div>
      <Button
        variant="contained"
        type="submit"
        onClick={() => {
          setStartQuiz(true);
        }}
        className="px-3 rounded-sm "
      >
        Start Quiz
      </Button>
    </div>
  );
}

export default FlagQuiz;
