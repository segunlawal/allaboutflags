import { useState } from 'react';
import BeginQuiz from './BeginQuiz';
// import { ReactComponent as ComingSoon } from '../assets/comingSoon.svg';

function FlagQuiz(props) {
  const { allcountries } = props;
  const [startQuiz, setStartQuiz] = useState(false);
  const handleStart = () => {
    setStartQuiz(true);
  };

  return (
    <div className="flex flex-col justify-content-center">
      {startQuiz ? (
        <BeginQuiz allcountries={allcountries} />
      ) : (
        <>
          <p className="text-white">Start the quiz</p>
          <button
            onClick={handleStart}
            type="submit"
            className="text-[#172755] bg-[#FFFF00] w-20 rounded-sm mx-auto font-bold"
          >
            Start
          </button>
        </>
      )}
    </div>
  );
}

export default FlagQuiz;
