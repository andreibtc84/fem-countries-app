import styled from "styled-components";

export const FilterRegion = ({ setActiveRegion }) => {
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
    <SelectBox
      name="Region"
      id="region"
      onChange={(e) => {
        setActiveRegion(e.target.value);
      }}
    >
      {allRegions.map((region) => (
        <option
          value={`${allRegions[0] === region ? "" : region}`} // Filters out "Filter by name" option
          key={region}
        >
          {region}
        </option>
      ))}
    </SelectBox>
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
