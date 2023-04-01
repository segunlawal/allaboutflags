import { useState } from 'react';
import { Button } from '@mui/material';
import QuizQuestions from '../Quiz/QuizQuestions';
import Footer from '../components/Footer';

function FlagQuiz(props) {
  const { allcountries } = props;

  const [startQuiz, setStartQuiz] = useState(false);

  return startQuiz ? (
    <div>
      <QuizQuestions allcountries={allcountries} />
      <Footer />
    </div>
  ) : (
    <div>
      <p className="text-white">
        Take a quiz consisting of ten (10) multiple choice questions.
      </p>
      <p className="text-white pb-2">
        Each question has a flag with four country names as options to select
        from
      </p>
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
      <Footer />
    </div>
  );
}

export default FlagQuiz;
