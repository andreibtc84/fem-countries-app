import styled from "styled-components";
import { Toggle } from "./Toggle";

export const Navbar = () => {
  return (
    <Navigation>
      <h1>Where in the world? </h1>
      <Toggle />
    </Navigation>
  );
};

const Navigation = styled.nav`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 100vw;
  height: 10vh;
  padding: 1rem;
  margin-bottom: 4rem;
  overflow: none;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;
