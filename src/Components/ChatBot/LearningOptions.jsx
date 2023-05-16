import React, { useEffect, useState } from "react";
import MessageParser from "./MessageParser";

import "./LearningOptions.css";

const LearningOptions = (props) => {
  const [toggle, setToggle] = useState([false, false]);
  // const [toggle2, setToggle2] = useState(false);
  const options = [
    {
      text: "Yes",
      handler: () => {
        console.log(props);
        setToggle([true, false]);
        props.setState((prev) => ({
          ...prev,
          messages: [
            ...prev.messages,
            props.actionProvider.createChatbotMessage(
              "Hope you are enjoying our services 😃",
              {
                widget: "feedbackOptions",
              }
            ),
          ],
        }));
      },
      id: 1,
    },
    {
      text: "No",
      handler: () => {
        //  setToggle2(true);
        setToggle([false, true]);
        props.setState((prev) => ({
          ...prev,
          messages: [
            ...prev.messages,
            props.actionProvider.createChatbotMessage(
              "Please Signup to Insure-Corp and get Insured yourself with your Family Members"
            ),
          ],
        }));
      },
      id: 2,
    },
    // { text: "APIs", handler: () => {}, id: 3 },
    // { text: "Security", handler: () => {}, id: 4 },
    // { text: "Interview prep", handler: () => {}, id: 5 },
  ];

  const optionsMarkup = options.map((option, id) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
      style={toggle[id] ? { backgroundColor: "green", color: "white" } : {}}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;
