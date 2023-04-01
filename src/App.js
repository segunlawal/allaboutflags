import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FindTheFlag from './Pages/FindTheFlag';
import Navbar from './components/Navbar';
import GuessTheFlag from './Pages/GuessTheFlag';
import FlagQuiz from './Pages/FlagQuiz';
import getAllCountries from './components/FetchCountry';
import ErrorPage from './Pages/ErrorPage';
import Home from './Pages/Home';

const AppContainer = styled.div`
  background: #172755;
  text-align: center;
  min-height: 100vh;
  margin: 0;
`;

function App() {
  /* eslint-disable no-unused-vars */

  const [allcountries, setAllCountries] = useState();
  /* eslint-enable no-unused-vars */
  useEffect(() => {
    getAllCountries().then(data => setAllCountries(data));
  }, []);
  return (
    <Router>
      <AppContainer>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/allaboutflags" element={<Home />} />
          <Route
            path="/findtheflag"
            element={<FindTheFlag allcountries={allcountries} />}
          />
          <Route
            path="/flagquiz"
            element={<FlagQuiz allcountries={allcountries} />}
          />
          <Route
            path="/guesstheflag"
            element={<GuessTheFlag allcountries={allcountries} />}
          />
          <Route path="*" element={<ErrorPage />} />
          <Route />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;

/* <FindTheFlag allcountries={allcountries} /> */
/* <GuessTheFlag allcountries={allcountries} /> */
