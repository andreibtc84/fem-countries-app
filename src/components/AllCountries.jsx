import { useEffect, useState } from "react";
import styled from "styled-components";

export const AllCountries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    const check = localStorage.getItem("countries"); // Checks if data is stored in local storage

    if (check) {
      setCountries(JSON.parse(check)); // if it is, sets state to that data
    } else {
      const response = await fetch("https://restcountries.com/v3.1/all"); // if not, it will fetch the data from the API
      const data = await response.json();

      localStorage.setItem("countries", JSON.stringify(data));
      setCountries(data);
      console.log(data);
    }
  };

  return (
    <ListWrapper>
      {countries.map((country, i) => {
        return (
          <CountryCard
            key={i}
            onClick={() => console.log(country.name.common, "clicked")}
          >
            <img src={country.flags.svg} alt={country.name.common + " flag"} />
            <div>
              <h2>{country.name.common}</h2>
              <div>
                <h5>Population:</h5>
                <p>{country.population}</p>
              </div>
              <div>
                <h5>Region:</h5>
                <p>{country.region}</p>
              </div>
              <div>
                <h5>Capital City:</h5>
                <p>{country.capital}</p>
              </div>
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

    div {
      display: inline;
      color: gray;

      h5 {
        display: inline;
      }
      p {
        display: inline;
        margin: 1rem;
      }
    }
  }
`;
