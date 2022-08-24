import React from 'react';
import styled from 'styled-components';

const Welcome = styled.p`
  font-size: 20px;
  font-weight: 800;
`;

function Home() {
  return (
    <div>
      <Welcome>All about flags of the countries of the world. </Welcome>
    </div>
  );
}

export default Home;
