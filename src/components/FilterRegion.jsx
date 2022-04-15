import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { AllCountries } from "./AllCountries";
import { useState, useEffect } from "react";

export const FilterRegion = () => {
  const allRegions = [
    "Filter by region",
    "Africa",
    "Americas",
    "Antarctic",
    "Asia",
    "Europe",
    "Oceania",
  ];
  const [activeRegion, setActiveRegion] = useState(allRegions[0]);

  useEffect(() => {
    console.log("useEffect ran!");
  }, []);

  return (
    <SelectBox
      name="Region"
      id="region"
      onChange={(e) => setActiveRegion(e.target.value)}
    >
      {allRegions.map((region) => (
        <option value={region} key={region}>
          {region}
        </option>
      ))}
    </SelectBox>
    // <SelectBox>
    //   <NavLink to={"/"} element={<AllCountries />}>
    //     <option value="Filter by region" defaultValue>
    //       Filter by region
    //     </option>
    //   </NavLink>
    //   <NavLink to={"/region/africa"}>
    //     <option value="Africa">Africa</option>
    //   </NavLink>
    //   <NavLink to={"/region/americas"} element={<AllCountries />}>
    //     <option value="Americas">Americas</option>
    //   </NavLink>
    //   <NavLink to={"/region/antarctic"} element={<AllCountries />}>
    //     <option value="Antarctic">Antarctic</option>
    //   </NavLink>
    //   <NavLink to={"/region/asia"} element={<AllCountries />}>
    //     <option value="Asia">Asia</option>
    //   </NavLink>
    //   <NavLink to={"/region/europe"} element={<AllCountries />}>
    //     <option value="Europe">Europe</option>
    //   </NavLink>
    //   <NavLink to={"/region/oceania"} element={<AllCountries />}>
    //     <option value="Oceania">Oceania</option>
    //   </NavLink>
    // </SelectBox>
  );
};

const SelectBox = styled.select`
  font-size: 1.2rem;
  padding: 1rem 2rem;
  width: fit-content;
  border: none;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;
