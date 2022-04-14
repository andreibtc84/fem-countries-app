import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { AllCountries } from "./AllCountries";

export const FilterRegion = () => {
  const allRegions = [
    "Africa",
    "Americas",
    "Antarctic",
    "Asia",
    "Europe",
    "Oceania",
  ];
  return (
    <FilterBox>
      <SelectBox name="Region" id="region">
        {allRegions.map((region) => (
          <option value={region} key={region} onChange={console.log("Changed")}>
            <NavLink
              to={`/region/${region}`}
              element={<AllCountries region={region} />}
            >
              {region}
            </NavLink>
          </option>
        ))}
      </SelectBox>
    </FilterBox>
  );
};

const FilterBox = styled.div`
  margin: 2rem;
  padding: 1rem;
  width: 10rem;
`;
const SelectBox = styled.select`
  margin: 1rem 4rem;
  padding: 1rem 2rem;
  width: fit-content;
  border: none;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;
