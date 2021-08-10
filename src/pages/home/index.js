import React from "react";
import Audio from "../../components/Audio/Audio"
import soundBg from "../../sound.mp3"
import GetName from "../../components/getName/getName"
import "./home.css";


const home = () => {
  return (
    <div className="home">
      <Audio link={soundBg} />
      <GetName redirect="/otra"/>
    </div>
  );
};

export default home;
