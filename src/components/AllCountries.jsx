import { useEffect, useState } from "react";
import styled from "styled-components";

export const AllCountries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    setCountries(data);
    console.log(data);
  };

  return (
    <ListWrapper>
      {countries.map((country, i) => {
        return (
          <CountryCard key={i}>
            <img src={country.flags.svg} alt={country.name.common + " flag"} />
            <div>
              <h2>{country.name.common}</h2>
              <p>
                <h5>Capital City:</h5> <span>{country.capital}</span>
              </p>
              <p>
                <h5>Region:</h5> <span>{country.region}</span>
              </p>
              <p>
                <h5>Population:</h5> <span>{country.population}</span>
              </p>
            </div>
          </CountryCard>
        );
      })}
    </ListWrapper>
  );
};

const ListWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 2rem;
  margin: 0 auto;
`;
const CountryCard = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  border: 2px solid black;
  border-radius: 0.5rem;
  width: 300px;
  height: 400px;
  overflow: hidden;

  img {
    width: 100%;
  }

  div {
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
    justify-content: space-evenly;
    padding: 10px;
    p {
      color: gray;

      h5 {
        display: inline;
      }
    }
  }
`;
