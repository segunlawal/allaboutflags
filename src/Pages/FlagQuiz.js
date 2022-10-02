import React from 'react';
import { ReactComponent as ComingSoon } from '../assets/comingSoon.svg';

function FlagQuiz() {
  return (
    <div>
      <p className="text-2xl text-white mt-20 text-pink-400">COMING SOON</p>
      <ComingSoon className="w-96 mx-auto h-96 -mt-10" />
    </div>
  );
}

export default FlagQuiz;
