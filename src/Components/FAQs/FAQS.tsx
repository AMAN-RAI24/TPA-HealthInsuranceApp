import "./styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import question from "../../Assets/Images/question.svg";

export function FAQS() {
  const faqs = [
    {
      q: "Is Insure Corp an insurance carrier?",
      a: "Insure Corp is a Third Party administrator which provides services mainly related to Group Health Policy.",
    },
    {
      q: "What is Group Health Insurance?",
      a: "Group health insurance cover is offered to the employees of an organization, which can also be extended to cover their family. The policy covers medical expenses incurred by the insured .",
    },
    {
      q: "Will Employees be allowed to add dependents other than spouse and children?",
      a: "Yes ,the Employees can add family members other than spouse and children by paying some extra amount.",
    },
    {
      q: "Where can Employees Submit and view their claims ?",
      a: "Employees can add claims ,view the claims in the Employee Dashboard section of the Web Platform!",
    },
    // {
    //   q: "What is Life Insurance Policy ,What is covered in it??",
    //   a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto debitis officia deserunt! Maxime nulla veniam eligendi laboriosam non aperiam ex, facere sint inventore adipisci ipsa deserunt delectus illo! Quibusdam, doloribus.Nostrum aliquam voluptatibus cumque quisquam eligendi repellendus non alias dolorem suscipit impedit eum hic culpa, nulla dolor corrupti minus veniam commodi inventore nam. Eum architecto eligendi laudantium quia iure deserunt.",
    // },
    // {
    //   q: "What is Life Insurance Policy ,What is covered in it??",
    //   a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto debitis officia deserunt! Maxime nulla veniam eligendi laboriosam non aperiam ex, facere sint inventore adipisci ipsa deserunt delectus illo! Quibusdam, doloribus.Nostrum aliquam voluptatibus cumque quisquam eligendi repellendus non alias dolorem suscipit impedit eum hic culpa, nulla dolor corrupti minus veniam commodi inventore nam. Eum architecto eligendi laudantium quia iure deserunt.",
    // },
    // {
    //   q: "What is Life Insurance Policy ,What is covered in it??",
    //   a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto debitis officia deserunt! Maxime nulla veniam eligendi laboriosam non aperiam ex, facere sint inventore adipisci ipsa deserunt delectus illo! Quibusdam, doloribus.Nostrum aliquam voluptatibus cumque quisquam eligendi repellendus non alias dolorem suscipit impedit eum hic culpa, nulla dolor corrupti minus veniam commodi inventore nam. Eum architecto eligendi laudantium quia iure deserunt.",
    // },
  ];

  const faqToggle = (i: number, close: boolean) => {
    const faqNodes = document.querySelectorAll(".faqs-container .faq");
    const faqNode = faqNodes[i];
    const faqNodeAnswer = faqNode.querySelector(".faq-answer");
    faqNodeAnswer?.classList.toggle("invisible");
    const faqNodeAction = faqNode.querySelector(".faq-action");
    let openIcon, closeIcon;
    if (faqNodeAction != null) {
      openIcon = faqNodeAction.querySelector(".open");
      closeIcon = faqNodeAction.querySelector(".close");
    }
    // console.log(faqNodes);
    if (!close) {
      console.log(openIcon);
      openIcon?.classList.add("invisible");
      closeIcon?.classList.remove("invisible");
    } else {
      closeIcon?.classList.add("invisible");
      openIcon?.classList.remove("invisible");
    }
  };
  const FAQ = ({ i }: any) => {
    return (
      <div className="faq">
        <div className="faq-question">{faqs[i].q}</div>
        <div className="faq-answer invisible">{faqs[i].a}</div>
        <div className="faq-action">
          <KeyboardArrowDownIcon
            className="open"
            onClick={(e) => {
              faqToggle(i, false);
            }}
            style={{ width: "30px", height: "30px" }}
          />
          <CloseIcon
            className="close  invisible"
            onClick={(e) => {
              faqToggle(i, true);
            }}
            style={{ width: "20px", height: "20px" }}
          />
        </div>
      </div>
    );
  };
  return (
    <div className="faqs-container">
      <div className="faq-header">
        <div style={{ margin: "auto", width: "250px" }}>
          <img
            src={question}
            alt=""
            style={{
              width: "250px",
              height: "250px",
              objectFit: "contain",
            }}
          />
        </div>

        <h1 style={{ textAlign: "center", fontSize: "48px" }}>
          Frequently Asked Questions
        </h1>
      </div>
      <div className="faqs-list">
        {faqs.map((faq, i) => {
          return <FAQ i={i} />;
        })}
      </div>
    </div>
  );
}
