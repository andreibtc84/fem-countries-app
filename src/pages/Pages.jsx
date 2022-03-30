import { Home } from "./Home";
import { Routes, Route } from "react-router-dom";
import { SingleCountry } from "../components/SingleCountry";

export const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SingleCountry/:name" element={<SingleCountry />} />
    </Routes>
  );
};
