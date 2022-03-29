import { NavLink } from "react-router-dom";
import styled from "styled-components";

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
      <select name="Region" id="region">
        {allRegions.map((region) => (
          <option value={region} key={region}>
            {region}
          </option>
        ))}
      </select>
    </FilterBox>
  );
};

const FilterBox = styled.div`
  margin: 2rem;
  padding: 1rem;
`;
