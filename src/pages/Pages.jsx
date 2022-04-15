import { Home } from "./Home";
import { Routes, Route } from "react-router-dom";
import { SingleCountry } from "../components/SingleCountry";
import { ErrorPage } from "../pages/ErrorPage";

export const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SingleCountry/:name" element={<SingleCountry />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
