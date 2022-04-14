import React from "react";
import { FilterRegion } from "./FilterRegion";
import { Search } from "./Search";
import styled from "styled-components";

export const UtilityBar = () => {
  return (
    <UtilityContainer>
      <Search />
      <FilterRegion />
    </UtilityContainer>
  );
};

const UtilityContainer = styled.div`
  display: flex;
  flex-flow: wrap row;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin-bottom: 5rem;
  gap: 2rem;
`;
