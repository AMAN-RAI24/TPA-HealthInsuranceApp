import { createChatBotMessage } from "react-chatbot-kit";
import FeedbackOptions from "./FeedbackOptions";
import LearningOptions from "./LearningOptions";
import { RatingOptions } from "./RatingOptions";

const config = {
  botName: "Beema Mitra",
  initialMessages: [
    createChatBotMessage(`Hi There`),
    createChatBotMessage(`Please type in your name!`),
  ],
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "feedbackOptions",
      widgetFunc: (props) => <FeedbackOptions {...props} />,
    },
    {
      widgetName: "ratingOptions",
      widgetFunc: (props) => <RatingOptions {...props} />,
    },
  ],
};

export default config;
