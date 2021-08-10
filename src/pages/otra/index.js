import React from "react";
import BoxOfText from "../../components/Box/BoxOfText"
import { data } from "./data"
import "./otra.css"
const Otra = () => {
  return (
    <div className="otra">
       <BoxOfText data={data}/>
    </div>
  );
};

export default Otra;
