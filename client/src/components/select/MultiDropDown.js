import React, { Component, Fragment } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
//import { colourOptions } from '../data';

const animatedComponents = makeAnimated();

const colourOptions = [
  { value: "MCX", label: "MCX" },
  { value: "RNAM", label: "RNAM" },
  { value: "JK", label: "JK" }
];

export default function AnimatedMulti() {
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={[colourOptions[4], colourOptions[5]]}
      isMulti
      options={colourOptions}
    />
  );
}
