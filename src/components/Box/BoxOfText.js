import React, { useState, useEffect } from "react";
import "./boxOfText.css";

const Loader = () => {
  return (
    <svg
      className="loader"
      height="21"
      viewBox="0 0 21 21"
      width="21"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m10.5 3.5v2" />
        <path d="m15.5 5.5-1.5 1.5" />
        <path d="m5.5 5.5 1.5 1.5" />
        <path d="m10.5 17.5v-2" />
        <path d="m15.5 15.5-1.5-1.5" />
        <path d="m5.5 15.5 1.5-1.5" />
        <path d="m3.5 10.5h2" />
        <path d="m15.5 10.5h2" />
      </g>
    </svg>
  );
};

const Next = () => {
  return (
    <svg
      height="21"
      viewBox="0 0 21 21"
      width="21"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(7 6)"
      >
        <path d="m.5 8.5 4-4-4-4" />
        <path d="m4.5 8.5 4-4-4-4" />
      </g>
    </svg>
  );
};

const BoxOfText = ({
  text = "",
  delay = 0,
  duration = 0,
  speaker = "Levi",
  width = "600px",
  height = "250px",
}) => {
  const [ textArray ] = useState(text.split(""));
  const [textState, setTextState] = useState({
    key: 0,
    length: textArray.length,
    text: "",
  });

  useEffect(() => {
    if (textState.key <= textState.length) {
      setTimeout(() => {
        setTextState((pre) => ({
          ...textState,
          key: pre.key + 1,
          text: !textArray[pre.key] ? pre.text : pre.text + textArray[pre.key],
        }));
      }, 200);
    }
  }, [textState, textArray]);

  return (
    <div style={{ width: width, height: height }} className="box-container">
      <div className="box-container_speaker">speaker</div>
      <div className="box-container_text">
        <p> {textState.text} </p>
      </div>
      <button>
        <Next />
      </button>
    </div>
  );
};

export default BoxOfText;
