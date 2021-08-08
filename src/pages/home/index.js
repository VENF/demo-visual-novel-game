import React from "react";
import BoxOfText from "../../components/Box/BoxOfText";
import { data } from "./data"

import "./style.css"
const home = () => {
  return (
    <div className="home">
      <BoxOfText data={data} />
    </div>
  );
};

export default home;
