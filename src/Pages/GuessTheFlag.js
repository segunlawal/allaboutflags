import styled from 'styled-components';
import { useState } from 'react';
// import '../App.css';

const NextButton = styled.button``;

function GuessTheFlag(props) {
  const { allcountries } = props;
  const [guessValue, setGuessValue] = useState('');

  const allthecountries = allcountries?.map(onecountry => ({
    name: onecountry.name.common,
    flag: onecountry.flags.png,
  }));
  const alltheflags =
    allthecountries && allthecountries.map(acountry => acountry.flag);

  /* eslint-disable no-unused-vars */
  function generateTenRandomFlags() {
    return alltheflags && alltheflags[Math.floor(Math.random() * 249)];
  }
  /* eslint-enable no-unused-vars */
  function handleChange(event) {
    setGuessValue(event.target.value);
  }

  return (
    <div>
      {/* <img src={`${generateRandomFlag()}`} alt="" /> */}
      <input
        type="text"
        className="guess-the-flag-input"
        placeholder="Guess the country"
        onChange={handleChange}
        value={guessValue}
      />
      <NextButton type="submit">Next</NextButton>
      <p>{guessValue}</p>
    </div>
  );
}

export default GuessTheFlag;
