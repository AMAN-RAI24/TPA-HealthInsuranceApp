import React,{ useEffect, useState }  from "react";
import MessageParser from "./MessageParser";


import "./LearningOptions.css";

const FeedbackOptions = (props) => {
  const [toggle, setToggle] = useState([false,false]);
  // const [toggle2, setToggle2] = useState(false);
  const options = [
    { text: "Query", handler: () => {
      console.log(props);
      setToggle([true,false]);
      props.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, props.actionProvider.createChatbotMessage("Ask Anything😃")],
      }));
    }, id: 1 },
    { text: "Feedback", handler: () => {
      //  setToggle2(true);
      setToggle([false,true]);
      props.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, props.actionProvider.createChatbotMessage("This matters a lot for us", {
          widget: "ratingOptions",
        })],
      }));

    }, id: 2 },
    // { text: "APIs", handler: () => {}, id: 3 },
    // { text: "Security", handler: () => {}, id: 4 },
    // { text: "Interview prep", handler: () => {}, id: 5 },
  ];

  const optionsMarkup = options.map((option,id) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
      style={toggle[id]? {backgroundColor:"green",color:"white"}:{}}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default FeedbackOptions;