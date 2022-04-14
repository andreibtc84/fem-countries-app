import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { AllCountries } from "./AllCountries";

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
  return (
    <SelectBox name="Region" id="region">
      {allRegions.map((region) => (
        <option value={region} key={region} onChange={console.log("Changed")}>
          {region}
        </option>
      ))}
    </SelectBox>
  );
};

const SelectBox = styled.select`
  font-size: 1.5rem;
  padding: 1rem 2rem;
  width: fit-content;
  border: none;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;
