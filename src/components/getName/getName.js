import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./getName.css";
const Name = ({ redirect = "/" }) => {
  
  const history = useHistory();
  const [name, setName] = useState("");

  const handlerName = (e) => {
    setName(e.target.value);
  };

  const save = () => {
    localStorage.setItem("name", name);
    history.push(redirect);
  };

  return (
    <div className="getName">
      <h1> ¿ Como te llamas ? </h1>
      <input onChange={handlerName} type="text" />
      <button onClick={save}>Comenzar</button>
    </div>
  );
};

export default Name;
