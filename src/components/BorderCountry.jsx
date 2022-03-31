import React from "react";
import { useParams } from "react-router-dom";

export const BorderCountry = (borders) => {
  let params = useParams();
  console.log(borders);
  return <div>{borders}</div>;
};
