import { useState } from 'react';
// import { ReactComponent as ComingSoon } from '../assets/comingSoon.svg';

function FlagQuiz() {
  const [startQuiz, setStartQuiz] = useState(false);
  const handleStart = () => {
    setStartQuiz(true);
  };

  return (
    <div className="flex flex-col justify-content-center">
      {startQuiz ? (
        <div className="text-white">Quiz has started</div>
      ) : (
        <>
          <p className="text-white">Start begin the quiz</p>
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
