import styled from 'styled-components';
import SelectSearch, { fuzzySearch } from 'react-select-search';
import { useState } from 'react';
import '../App.css';

const Loading = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

function Greeting(props) {
  const { allcountries } = props;
  const [inputValue, setinputValue] = useState();
  // console.log(allcountries);

  const allthecountries = allcountries?.map(onecountry => ({
    name: onecountry.name.common,
    value: onecountry.name.common,
    flag: onecountry.flags.png,
    continent: onecountry.continents[0],
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
      <Loading className="text-white">Loading...</Loading>
    </div>
  ) : (
    <div className="findtheflag pt-28">
      <p className="pb-5 font-bold text-white">
        Type in a country to reveal its flag and continent
      </p>
      <SelectSearch
        options={options}
        value={inputValue}
        onChange={setinputValue}
        search
        filterOptions={fuzzySearch}
        placeholder="Change country"
      />
      <div className="pt-5">
        <p className="font-semibold text-white uppercase">
          {finalCountryObj.name}
        </p>
        {finalCountryObj.name && (
          <img
            className="mx-auto shadow-xl"
            src={`${finalCountryObj.flag}`}
            alt={`flag of ${finalCountryObj.name}`}
          />
        )}
        {finalCountryObj.continent && (
          <p className="font-semibold pt-3 text-white">
            Continent: {finalCountryObj.continent}
          </p>
        )}
      </div>
    </div>
  );
}

export default Greeting;
