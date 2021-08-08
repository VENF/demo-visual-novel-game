import React from "react";
import "./Options.css";

const Options = ({ handlerValueOptions, options }) => {
  return (
    <div className="container_options">
      {Object.keys(options).map((item) => (
        <div
          onClick={() => handlerValueOptions(options[item])}
          className="box_option"
          key={item}
        >
          {options[item].ask}
        </div>
      ))}
    </div>
  );
};

export default Options;
