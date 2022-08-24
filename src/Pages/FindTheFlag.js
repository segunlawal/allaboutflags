import styled from 'styled-components';
import SelectSearch, { fuzzySearch } from 'react-select-search';
import { useState, CSSProperties } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import '../App.css';

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'blue',
};
const Loading = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

function Greeting(props) {
  const { allcountries } = props;
  const [inputValue, setinputValue] = useState();
  const allthecountries = allcountries?.map(onecountry => ({
    name: onecountry.name.common,
    value: onecountry.name.common,
    flag: onecountry.flags.png,
  }));

  allthecountries?.sort((a, b) => a.name.localeCompare(b.name));
  const options = allthecountries;

  const selectedCountry = allthecountries?.filter(
    acountry => acountry.name === inputValue
  );
  const finalCountryObj = {};
  for (let i = 0; i < selectedCountry?.length; i += 1) {
    Object.assign(finalCountryObj, selectedCountry[i]);
  }

  return options == null ? (
    <div>
      <Loading>Loading...</Loading>
      <ClipLoader
        // color={color}
        // loading={loading}
        cssOverride={override}
        size={70}
      />
    </div>
  ) : (
    <div className="findtheflag">
      <SelectSearch
        options={options}
        value={inputValue}
        onChange={setinputValue}
        search
        filterOptions={fuzzySearch}
        placeholder="Change country"
      />
      <div>
        <p>{finalCountryObj.name}</p>
        {finalCountryObj.name && (
          <img
            src={`${finalCountryObj.flag}`}
            alt={`flag of ${finalCountryObj.name}`}
          />
        )}
      </div>
    </div>
  );
}

export default Greeting;
