import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"
import Options from "../Options/Options";
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
  data,
  speaker = "some speaker",
  width = "600px",
  height = "250px",
}) => {
  const { root } = data;
  const history = useHistory()
  const [ShowOptions, setShowOptions] = useState(false);

  const [text, setText] = useState(root.text);

  const [questions, setQuestions] = useState(root.questions);
  const [position, setPosition] = useState(0);
  const [currentText, setCurrentText] = useState(text[position].split(""));
  const [endOfText, setEndOfText] = useState(false);
  const [textState, setTextState] = useState({
    key: 0,
    length: currentText.length,
    text: "",
    redirect: ""
  });

  useEffect(() => {
    if (textState.key <= textState.length) {
      setTimeout(() => {
        setTextState((pre) => ({
          ...textState,
          key: pre.key + 1,
          text: !currentText[pre.key]
            ? pre.text
            : pre.text + currentText[pre.key],
        }));
      }, 50);
    } else {
      setEndOfText(true);
    }
  }, [textState, currentText]);

  const handlerText = () => {
    let catchPosition = position;
    let catchCurrentText = [];
    if (setEndOfText) {
      if (position < text.length - 1) {
        setPosition((pre) => pre + 1);
        catchPosition = catchPosition + 1;
        setCurrentText(text[catchPosition].split(""));
        catchCurrentText = text[catchPosition].split("");
        setTextState({
          ...textState,
          key: 0,
          length: catchCurrentText.length,
          text: "",
        });
        setEndOfText(false);
      } else {
        if(Object.keys(questions).length > 0) {
          setShowOptions(true);
        } else {
          history.push(textState.redirect)
        }
      }
    }
  };

  const handlerValueOptions = (item) => {
    let catchPosition = 0;
    setPosition(catchPosition);
    setText(item.response);
    setCurrentText(item.response[catchPosition].split(""));
    setTextState({
      key: 0,
      length: item.response[catchPosition].length,
      text: "",
      redirect: item.redirect
    });
    if(item.questions) {
      setQuestions(item.questions)
    } else {
      if(item.end) {
        setQuestions([])
      }
    }
    setShowOptions((pre) => !pre);
  };

  return (
    <div style={{ width: width, height: height }} className="box-container">
      <div className="box-container_speaker">{speaker}</div>
      <div className="box-container_text">
        {!ShowOptions ? (
          <p> {textState.text}</p>
        ) : (
          <Options
            handlerValueOptions={handlerValueOptions}
            options={questions}
          />
        )}
      </div>
      <button onClick={endOfText ? handlerText : null}>
        {endOfText && <Next />}
        {!endOfText && <Loader />}
      </button>
    </div>
  );
};

export default BoxOfText;
