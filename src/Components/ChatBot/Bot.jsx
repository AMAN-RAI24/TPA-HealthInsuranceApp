import React, { useEffect, useState } from "react";
import config from "./config.js";
import MessageParser from "./MessageParser.js";
import ActionProvider from "./ActionProvider.js";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import "./main.css";
import { nodeModuleNameResolver } from "typescript";

export const Bot = () => {
  const [isRemoved, setIsRemoved] = useState(false);
  useEffect(() => {
    // const avatars = document.querySelectorAll(
    //   ".react-chatbot-kit-chat-bot-avatar-container"
    // );
    // avatars.forEach((avatar) => {
    //   console.log("removing");
    //   avatar.remove();
    // });
    // setIsRemoved(true);
  });
  return (
    <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};
