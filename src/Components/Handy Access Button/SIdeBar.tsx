import "./styles.css";
import CallIcon from "@mui/icons-material/Call";
import BusinessIcon from "@mui/icons-material/Business";
import MailIcon from "@mui/icons-material/Mail";
import InstagramIcon from "@mui/icons-material/Instagram";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { Bot } from "../ChatBot/Bot";
import ForumIcon from "@mui/icons-material/Forum";

export function SideBar() {
  const contactDetails = {
    phone: "0824 245678",
    email: "customcare@insurecorp.com",
    address: "3rd Cross, Kurinji Nagar, Lawspet ,Bangalore",
    instagram: "Insure Corp. ",
  };
  const [sideButtons, setSideButtons] = useState(false);
  const [toggleOpenCall, setToggleOpenCall] = useState(false);
  const [toggleOpenMail, setToggleOpenMail] = useState(false);
  const [toggleOpenAddress, setToggleOpenAddress] = useState(false);
  const [toggleOpenInsta, setToggleOpenInsta] = useState(false);
  const [toggleBot, setToggleBot] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const toggleDisplay = (
    handler: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    handler((current) => !current);
  };
  const buttonStyle = {
    width: 45,
    height: 45,
    cursor: "pointer",
  };
  return (
    <div className="side-action-container">
      {sideButtons ? (
        <div>
          <div
            className="action"
            onClick={(e) => {
              toggleDisplay(setToggleOpenCall);
            }}
          >
            <CallIcon style={buttonStyle}></CallIcon>
            {toggleOpenCall ? (
              <div className="action-details">{contactDetails.phone}</div>
            ) : (
              ""
            )}
          </div>
          <div
            className="action"
            onClick={(e) => {
              toggleDisplay(setToggleOpenAddress);
            }}
          >
            <BusinessIcon style={buttonStyle}></BusinessIcon>
            {toggleOpenAddress ? (
              <div className="action-details">{contactDetails.address}</div>
            ) : (
              ""
            )}
          </div>
          <div
            className="action"
            onClick={(e) => {
              toggleDisplay(setToggleOpenMail);
            }}
          >
            <MailIcon style={buttonStyle}></MailIcon>
            {toggleOpenMail ? (
              <div
                className="action-details"
                style={{ cursor: "pointer" }}
                onClick={(e) =>
                  (window.location.href = "mailto:customercare@insurecorp.com")
                }
              >
                {contactDetails.email}
              </div>
            ) : (
              ""
            )}
          </div>
          <div
            className="action"
            onClick={(e) => {
              toggleDisplay(setToggleOpenInsta);
            }}
          >
            <InstagramIcon style={buttonStyle}></InstagramIcon>
            {toggleOpenInsta ? (
              <div className="action-details">
                {contactDetails.instagram}
                <a href="https://instagram.com">Here</a>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        ""
      )}

      {sideButtons ? (
        <div
          className="action open-button"
          onClick={(e) => {
            toggleDisplay(setSideButtons);
          }}
        >
          <CloseIcon style={buttonStyle}></CloseIcon>
        </div>
      ) : (
        <div>
          <CallIcon
            onClick={(e) => {
              toggleDisplay(setSideButtons);
            }}
            className="action open-button"
            style={buttonStyle}
          ></CallIcon>
          <div
            className="action-details"
            style={{ transform: "translate(-102%,-60px)" }}
          >
            Contact us
          </div>
        </div>
      )}
      <div
        className="action"
        style={{
          width: "50px",
          height: "50px",
          color: "white",
          backgroundColor: "#880e4f",
        }}
      >
        <ForumIcon
          sx={{ height: "35px !important" }}
          className="bot"
          onClick={(e) => {
            toggleDisplay(setToggleBot);
          }}
          style={buttonStyle}
        ></ForumIcon>

        {toggleBot ? (
          <div
            style={{
              position: "absolute",

              bottom: "0",
              left: 0,
              transform: "translateX(-104%)",
              zIndex: 100,
            }}
          >
            <Bot />{" "}
          </div>
        ) : (
          ""
        )}
      </div>
      {showModal == true ? (
        <div className="chat-modal">
          <p>Need any help?</p>
          <div className="modal-close">
            <CloseIcon
              sx={{
                cursor: "pointer",
              }}
              onClick={(e) => {
                setShowModal(false);
              }}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
