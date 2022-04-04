import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { AllCountries } from "./AllCountries";
import { MdArrowBackIosNew } from "react-icons/md";
import { BorderCountry } from "./BorderCountry";

export const SingleCountry = () => {
  let params = useParams();
  const [countryDetails, setCountryDetails] = useState({});
  const [currencies, setCurrencies] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [borders, setBorders] = useState([]);

  const fetchDetails = async () => {
    const response = await fetch(
      `https://restcountries.com/v2/name/${params.name}`
    );
    const details = await response.json();

    setBorders(details[0].borders);
    setCountryDetails(details[0]);
    setCurrencies(details[0].currencies);
    setLanguages(details[0].languages);
  };

  useEffect(() => {
    fetchDetails();
  }, [params]);
  return (
    <>
      <Link
        to={"/"}
        element={<AllCountries />}
        style={{
          textDecoration: "none",
          alignSelf: "start",

          maxWidth: "100%",
          overflow: "hidden",
        }}
      >
        <StyledButton>
          <MdArrowBackIosNew />
          Back
        </StyledButton>
      </Link>
      <CountryWrapper>
        <FlagWrapper>
          <img src={countryDetails.flag} alt={countryDetails.name + " Flag"} />
        </FlagWrapper>

        <DetailsBox>
          <h1>{countryDetails.name}</h1>
          <DetailWrapper>
            <div>
              <p>
                <strong>Native name:</strong> {countryDetails.nativeName}
              </p>
              <p>
                <strong>Population:</strong> {countryDetails.population}
              </p>
              <p>
                <strong>Region:</strong> {countryDetails.region}
              </p>
              <p>
                <strong>Sub Region:</strong> {countryDetails.subregion}
              </p>
              <p>
                <strong>Capital:</strong> {countryDetails.capital}
              </p>
            </div>
            <div>
              <p>
                <strong>Top Level Domain:</strong>{" "}
                {countryDetails.topLevelDomain}
              </p>
              <p>
                <strong>Currencies:</strong>
                {currencies &&
                  currencies.map((currency) => `${currency.name}, `)}
              </p>
              <p>
                <strong>Languages:</strong>
                {languages && languages.map((lang) => `${lang.name}, `)}
              </p>
            </div>
          </DetailWrapper>
          <div>
            <strong>Border Countries:</strong>
            <ButtonWrapper>
              <BorderCountry borders={borders} />
            </ButtonWrapper>
          </div>
        </DetailsBox>
      </CountryWrapper>
    </>
  );
};

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  justify-content: space-around;
  background-color: white;
  margin: 3rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  text-transform: uppercase;
  border: 1px solid white;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
    background-color: black;
    color: white;
  }
  &:active {
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  }

  MdArrowBackIosNew {
    width: 4rem;
  }
`;
const CountryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 2rem;
  padding: 2rem;
  width: 100%;
  overflow: hidden;
`;

const FlagWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;
  margin: 0 auto;
  overflow: hidden;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  img {
    width: 100%;
    padding: 0 auto;
  }
`;

const DetailsBox = styled.div`
  display: grid;
  grid-template-rows: 0.5fr 1fr 1fr;
  gap: 2rem;
`;

const DetailWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

const ButtonWrapper = styled.div`
  display: inline-flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-evenly;
  gap: 0.5rem;
  margin: 0.5rem;

  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    justify-content: space-around;
    background-color: white;
    padding: 0.2rem 1rem;
    border-radius: 0.3rem;
    font-size: 0.7rem;
    border: 1px solid white;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
        rgba(0, 0, 0, 0.22) 0px 10px 10px;
      background-color: black;
      color: white;
    }
    &:active {
      box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px,
        rgba(0, 0, 0, 0.24) 0px 1px 2px;
    }
  }
`;
