import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { AllCountries } from "./AllCountries";
import { MdArrowBackIosNew } from "react-icons/md";

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

    setCountryDetails(details[0]);
    setCurrencies(details[0].currencies);
    setLanguages(details[0].languages);
    setBorders(details[0].borders);
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
          display: "flex",
          alignItems: "start",
          marginLeft: "4rem",
          width: "100%",
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
              {borders &&
                borders.map((element, i) => {
                  return <button key={i}>{element}</button>;
                })}
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
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  MdArrowBackIosNew {
    width: 4rem;
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
  &:active {
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  }
`;
const CountryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 2rem;
  padding: 2rem;
  max-width: 100%;
  overflow: hidden;
`;

const FlagWrapper = styled.div`
  margin: 0 auto;
  overflow: hidden;
  img {
    width: 100%;
    padding: 0 auto;
  }
`;

const DetailsBox = styled.div`
  display: grid;
  grid-template-rows: 0.5fr 2fr 1fr;
  gap: 2rem;
`;

const DetailWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

const ButtonWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 0.5rem;
  margin: 0.5rem;
`;
