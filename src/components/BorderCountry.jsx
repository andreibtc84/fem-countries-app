import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const BorderCountry = (borders) => {
  const [countryNames, setCountryNames] = useState();
  const [borderCountries, setBorderCountries] = useState({});

  useEffect(() => {
    setBorderCountries(borders);

    if (!borderCountries) {
      console.log("loading...");
      return "Loading...";
    } else {
      getBorderList();
      setBorderCountries(borders);
    }
  }, [borders]);

  const getBorderList = async () => {
    const checkNeigbours = localStorage.getItem("neigbourCountries");

    if (checkNeigbours) {
      setCountryNames(JSON.parse(checkNeigbours));
    } else {
      try {
        const response = await fetch(
          `https://restcountries.com/v2/alpha?codes=${borderCountries.borders.toString()}`
        );
        let borderCountriesList = await response.json();
        const countriesList = borderCountriesList.map((el) => el.name);
        setCountryNames(countriesList);
      } catch (error) {
        return error;
      }
    }
  };

  return (
    <>
      {!countryNames
        ? "This country has no neigbours or neibgours still loading..."
        : countryNames.map((element, i) => {
            return (
              <Link
                to={`/SingleCountry/${element}`}
                key={i}
                style={{ textDecoration: "none" }}
              >
                <button>{element}</button>
              </Link>
            );
          })}
    </>
  );
};
