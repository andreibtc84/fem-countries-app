import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const SingleCountry = () => {
  let params = useParams();
  const [countryDetails, setCountryDetails] = useState({});
  const [currencies, setCurrencies] = useState([]);
  const [languages, setLanguages] = useState([]);

  const fetchDetails = async () => {
    const response = await fetch(
      `https://restcountries.com/v2/name/${params.name}`
    );
    const details = await response.json();

    setCountryDetails(details[0]);
    setCurrencies(details[0].currencies);
    setLanguages(details[0].languages);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);
  return (
    <div>
      <div>
        <img
          src={countryDetails.flag}
          alt={countryDetails.name + "Flag"}
          width="400"
        />
      </div>
      <div>
        <h1>{countryDetails.name}</h1>
        <p>Native name: {countryDetails.nativeName}</p>
        <p>Population: {countryDetails.population}</p>
        <p>Region: {countryDetails.region}</p>
        <p>Sub Region: {countryDetails.subregion}</p>
        <p>Capital: {countryDetails.capital}</p>
      </div>
      <div>
        <p>Top Level Domain: {countryDetails.topLevelDomain}</p>
        <p>
          Currencies: {currencies && currencies.map((cur) => `${cur.name}, `)}
        </p>
        <p>
          Languages: {languages && languages.map((lang) => `${lang.name}, `)}
        </p>
      </div>
    </div>
  );
};
