class ActionProvider {
  // const [id, setId]  = useState(0);
  // id=0
  constructor(createChatbotMessage, setStateFunc, createClientMessage) {
    this.createChatbotMessage = createChatbotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    // this.id = 0;
  }

  handleHello() {
    const message = this.createChatbotMessage("Hello. Nice to meet you.");

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
    // this.id  = this.id + 1;
    // console.log(this.id)
  }

  sayWelcome(message) {
    this.setState((prev) => ({
      ...prev,
      messages: [
        ...prev.messages,
        this.createChatbotMessage("Hello " + message + ". Nice to meet you."),
        this.createChatbotMessage(message + " are you insured?", {
          widget: "learningOptions",
        }),
      ],
    }));
  }

  firstQuestion() {
    this.setState((prev) => ({
      ...prev,
      messages: [
        ...prev.messages,
        this.createChatbotMessage(
          "You can insure your family with support documents"
        ),
        this.createChatbotMessage(
          "Documnets like e.g Aadhaar Card, PAN Card etc."
        ),
      ],
    }));
  }
  secondQuestion() {
    this.setState((prev) => ({
      ...prev,
      messages: [
        ...prev.messages,
        this.createChatbotMessage(
          "You can claim under the coverage in any of the affiliated hospitals"
        ),
      ],
    }));
  }
  thirdQuestion() {
    this.setState((prev) => ({
      ...prev,
      messages: [
        ...prev.messages,
        this.createChatbotMessage(
          "If you are a manager then you can choose your plans wisely for your company by easy comparison."
        ),
      ],
    }));
  }
  forthQuestion() {
    this.setState((prev) => ({
      ...prev,
      messages: [
        ...prev.messages,
        this.createChatbotMessage(
          "You can customise your plan assigned by your company."
        ),
      ],
    }));
  }
  fifthQuestion() {
    this.setState((prev) => ({
      ...prev,
      messages: [
        ...prev.messages,
        this.createChatbotMessage(
          "You can find your profile and family Details here."
        ),
      ],
    }));
  }
  sixthQuestion() {
    this.setState((prev) => ({
      ...prev,
      messages: [
        ...prev.messages,
        this.createChatbotMessage("For more queries please contact us"),
        this.createChatbotMessage("Phone Number: +917788339922"),
        this.createChatbotMessage("Email: customercare@insurecorp.com"),
      ],
    }));
  }
  byeHandler() {
    this.setState((prev) => ({
      ...prev,
      messages: [
        ...prev.messages,
        this.createChatbotMessage("Good Bye  👋👋"),
        this.createChatbotMessage("Feel free to ask me anything."),
      ],
    }));
  }
}

export default ActionProvider;
