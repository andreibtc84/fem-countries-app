import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";

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
              <strong>Top Level Domain:</strong> {countryDetails.topLevelDomain}
            </p>
            <p>
              <strong>Currencies:</strong>
              {currencies && currencies.map((currency) => `${currency.name}, `)}
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
  );
};

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
