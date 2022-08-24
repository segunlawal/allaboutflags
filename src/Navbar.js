import styled from 'styled-components';
import './App.css';

const NavbarDiv = styled.div`
  background: white;
  margin: 0;
  box-shadow: 1px 7px 5px 0px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 1px 7px 5px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 1px 7px 5px 0px rgba(0, 0, 0, 0.1);
  height: 60px;
  margin-bottom: 50px;
  display: flex;
`;
const Logo = styled.img`
  width: 250px;
  padding: 10px;
  cursor: pointer;
`;

function Navbar() {
  return (
    <NavbarDiv>
      {/* eslint-disable global-require */}
      {/* 
      <p>FindTheFlag</p>
      <p>GuessTheFlag</p> */}
      <a href="/">
        <Logo src={require('./assets/allaboutflags.png')} alt="allaboutflags" />
      </a>
      <nav id="hamnav">
        <label htmlFor="hamburger">&#9776;</label>
        <input type="checkbox" id="hamburger" />
        <div id="hamitems">
          <a href="/home">Home</a>
          <a href="/findtheflag">FindTheFlag</a>
          <a href="/guesstheflag">GuessTheFlag</a>
        </div>
      </nav>
      {/* eslint-enable global-require */}
    </NavbarDiv>
  );
}

export default Navbar;
