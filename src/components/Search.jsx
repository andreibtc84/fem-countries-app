import styled from "styled-components";

export const Search = ({ setSearchTerm }) => {
  return (
    <SearchBox
      type="text"
      placeholder="Search"
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

const SearchBox = styled.input`
  padding: 1rem 2rem;
  width: fit-content;
  border: none;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  font-size: 1.2rem;
`;
