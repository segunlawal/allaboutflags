import React from 'react';
/* eslint-disable no-console */
function BeginQuiz(props) {
  const { allcountries } = props;
  const countriesFlags = allcountries?.map(item => ({
    name: item.name.common,
    flags: item.flags.png,
  }));
  console.log(countriesFlags);
  return (
    <div className="text-white">
      <div className="border-2 h-40 w-1/2 mx-auto">THE FLAG</div>
      <p>A. Nigeria</p>
    </div>
  );
}

export default BeginQuiz;
