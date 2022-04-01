import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const BorderCountry = (borders) => {
  let params = useParams();
  const [countryNames, setCountryNames] = useState([]);

  useEffect(() => {
    const getBorderList = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v2/alpha?codes=${borders.borders.toString()}`
        );
        let borderCountriesList = await response.json();
        borderCountriesList = borderCountriesList.map((el) => el.name);
        console.log(borderCountriesList);
        setCountryNames(borderCountriesList);
      } catch (error) {
        console.log(error);
      }
    };
    borders && getBorderList();
  }, [params]); // Needs to refresh the neigbour countries when conutry changes

  return (
    <>
      {countryNames &&
        countryNames.map((element, i) => {
          return (
            <Link to={`/SingleCountry/${element}`} key={i}>
              <button>{element}</button>
            </Link>
          );
        })}
    </>
  );
};
