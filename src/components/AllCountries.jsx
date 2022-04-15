import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { UtilityBar } from "./UtilityBar";

export const AllCountries = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeRegion, setActiveRegion] = useState("");

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    const check = localStorage.getItem("countries"); // Checks if data is stored in local storage

    if (check) {
      setCountries(JSON.parse(check)); // if it is, sets state to that data
    } else {
      const response = await fetch("https://restcountries.com/v2/all"); // if not, it will fetch the data from the API
      const data = await response.json();

      localStorage.setItem("countries", JSON.stringify(data));
      setCountries(data);
    }
  };

  const filteredCountries = countries
    .map((country) => country.region.includes(activeRegion) && country)
    .filter((mappedCountry) => mappedCountry.name && mappedCountry);

  return (
    <>
      <UtilityBar
        setSearchTerm={setSearchTerm}
        setActiveRegion={setActiveRegion}
      />
      <ListWrapper>
        {filteredCountries
          .filter((country) =>
            !searchTerm
              ? country
              : country.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((country) => {
            return (
              <nav key={country.name}>
                <CardLink to={"/SingleCountry/" + country.name}>
                  <CountryCard>
                    <img src={country.flags.svg} alt={country.name + " flag"} />
                    <div>
                      <h2>{country.name}</h2>
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
                </CardLink>
              </nav>
            );
          })}
      </ListWrapper>
    </>
  );
};

const ListWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 2rem;

  margin: 0 auto;
`;
const CardLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
`;
const CountryCard = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  margin: 1rem;
  grid-gap: 1rem;
  border-radius: 0.5rem;
  width: 300px;
  height: 400px;
  overflow: hidden;
  align-items: flex-start;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
  &:active {
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  }

  img {
    width: 100%;
  }

  div {
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
    justify-content: space-evenly;
    padding-left: 10px;

    h2 {
      color: black;
      margin: 1rem;
    }
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
