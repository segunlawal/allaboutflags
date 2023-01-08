import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import '../App.css';

const Loading = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

function GuessTheFlag(props) {
  /* eslint-disable no-unused-vars */
  const { allcountries } = props;
  const [guessValue, setGuessValue] = useState('');
  const [randNumber, setRandNumber] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);

  const allthecountries = allcountries?.map(onecountry => ({
    name: onecountry.name.common,
    flag: onecountry.flags.png,
  }));

  // console.log(allthecountries);

  function handleChange(event) {
    setGuessValue(event.target.value);
  }
  /* eslint-enable no-unused-vars */
  const handleShow = () => {
    setShowAnswer(prevans => !prevans);
  };
  const handleNext = () => {
    setRandNumber(Math.floor(Math.random() * 249));
    setShowAnswer(false);
    setGuessValue('');
  };
  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      document.getElementById('next-button').click();
    }
  };

  useEffect(() => {
    setRandNumber(Math.floor(Math.random() * 249));
  }, []);
  let flagName;
  if (allthecountries) {
    flagName = allthecountries[randNumber].name;
  }
  let rightOrWrong;
  if (allthecountries && guessValue.toLowerCase() === flagName.toLowerCase()) {
    rightOrWrong = true;
  } else rightOrWrong = false;

  return allthecountries == null ? (
    <div>
      <Loading className="text-white">Loading...</Loading>
    </div>
  ) : (
    <div className="pt-20">
      {allthecountries && (
        <img
          className="mx-auto my-10 shadow-xl"
          src={`${allthecountries[randNumber].flag}`}
          alt={`flag of `}
        />
      )}
      <input
        type="text"
        id="inputfld"
        className="guess-the-flag-input"
        placeholder="Guess the country"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        value={guessValue}
        spellCheck="false"
        autoComplete="off"
      />

      {rightOrWrong ? (
        <p className="text-green-400">
          {guessValue.charAt(0).toUpperCase() + guessValue.slice(1)} is right
        </p>
      ) : (
        guessValue && (
          <p className="text-red-500">
            {guessValue.charAt(0).toUpperCase() + guessValue.slice(1)} is wrong
          </p>
        )
      )}

      {allthecountries &&
        (showAnswer ? (
          <p className="text-white  opacity-80">{flagName}</p>
        ) : null)}
      <div className="flex gap-3 justify-center mt-5 pb-20">
        <Button variant="contained" onClick={handleShow}>
          {showAnswer ? `Hide Answer` : `Show Answer`}
        </Button>
        <Button variant="contained" onClick={handleNext} id="next-button">
          Next
        </Button>
      </div>
    </div>
  );
}

export default GuessTheFlag;
