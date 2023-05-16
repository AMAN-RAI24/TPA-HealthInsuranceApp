import { Alert, AlertTitle, Button } from "@mui/material";
import * as React from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import "./styles.css";
import { MakeOffer } from "../MakeOffer/MakeOffer";
import { acceptOffer, getBiddingDetails } from "../../Utitlity/Services/policy";
import { useParams } from "react-router-dom";
import { Loading } from "../Loading/loading";

export function Bidding(props: any) {
  const { id } = useParams();
  const [biddingData, setBiddingData] = React.useState<any>();
  const [loading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    getBiddingDetails("" + localStorage.getItem("jwt"), id).then((resp) => {
      setBiddingData(resp);
      setIsLoading(false);
    });
  }, []);

  const Offer = (offer: any, i: any) => {
    return (
      <div
        className="faq"
        style={{
          width: "700px",
          maxWidth: "100%",
          margin: "auto",
          marginTop: "20px",
        }}
      >
        <div className="faq-question">
          {offer.company + " is offering @ "}
          <strong>{offer.amount}/emp</strong>
        </div>
        <div className="faq-answer invisible">
          {offer.message}
          <div className="offer-action">
            {biddingData.accepted == false &&
            "" + localStorage.getItem("role") == "ROLE_MANAGER" ? (
              <Button
                variant="contained"
                onClick={() => {
                  acceptOffer("" + localStorage.getItem("jwt"), offer.id).then(
                    (resp) => {
                      console.log(resp);
                      window.location.reload();
                    }
                  );
                }}
              >
                Accept
              </Button>
            ) : (
              ""
            )}
          </div>
        </div>
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
  const faqToggle = (i: number, close: boolean) => {
    const faqNodes = document.querySelectorAll(".offer-section .faq");
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
  return (
    <div className="overlay">
      {loading == true ? (
        <Loading />
      ) : (
        <div className="offer-section">
          <div className="offer-action">
            <CloseIcon
              className="close-overlay"
              style={{ marginLeft: "auto" }}
              onClick={props.onClick}
            ></CloseIcon>
          </div>

          <Alert severity={biddingData?.severity}>
            <AlertTitle>Info</AlertTitle>
            <strong>{biddingData.title}</strong>
          </Alert>
          <h2 style={{ width: "700px", maxWidth: "100%" }}>All offers</h2>
          <div className="faqs-container">
            {biddingData.offers.map((offer: any, id: Number) =>
              Offer(offer, id)
            )}
          </div>
          {"" + localStorage.getItem("role") == "ROLE_INSURANCE" &&
          !biddingData.accepted ? (
            <MakeOffer></MakeOffer>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
}
