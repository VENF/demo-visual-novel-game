import React from "react";
import "./audio.css";
const Audio = ({ link }) => {
  return (
    <audio className="audio" loop controls autoPlay={true}>
      <source src={link} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default Audio;
