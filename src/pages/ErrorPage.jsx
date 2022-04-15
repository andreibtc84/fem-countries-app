import React from "react";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div>
      <h1>Sorry! Page not found!</h1>
      <Link to={"/"}>Go back to the Home page!</Link>
    </div>
  );
};
