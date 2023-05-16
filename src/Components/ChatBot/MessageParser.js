import ActionProvider from "./ActionProvider";

class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    console.log(message);
    if (this.state["messages"].length === 2) {
      this.actionProvider.sayWelcome(message);
    } else if (message.includes("hello") || message.includes("hi")) {
      this.actionProvider.handleHello();
    } else if (
      message.includes("family") ||
      message.includes("topup") ||
      message.includes("insur")
    ) {
      this.actionProvider.firstQuestion(message);
    } else if (
      message.includes("claim") ||
      message.includes("disease") ||
      message.includes("amount") ||
      message.includes("money") ||
      message.includes("paisa") ||
      message.includes("premium") ||
      message.includes("hospital")
    ) {
      this.actionProvider.secondQuestion(message);
    } else if (
      message.includes("compar") ||
      message.includes("dist") ||
      message.includes("prev")
    ) {
      this.actionProvider.thirdQuestion(message);
    } else if (
      message.includes("plan") ||
      message.includes("company") ||
      message.includes("benefit") ||
      message.includes("surgery")
    ) {
      this.actionProvider.forthQuestion(message);
    } else if (message.includes("profile")) {
      this.actionProvider.fifthQuestion(message);
    } else if (
      message.includes("Bye") ||
      message.includes("bye") ||
      message.includes("tata")
    ) {
      this.actionProvider.byeHandler(message);
    } else {
      this.actionProvider.sixthQuestion(message);
    }
  }
}

export default MessageParser;
