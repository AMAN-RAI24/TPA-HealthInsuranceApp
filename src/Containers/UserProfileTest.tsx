import "./userprofile.css";
import CakeIcon from "@mui/icons-material/Cake";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import ApartmentIcon from "@mui/icons-material/Apartment";
import coverage_img from "../Assets/Images/cash.svg";
import group from "../Assets/About us/group.svg";
export function UserProfileTest() {
  return (
    <div className="user-profile-container">
      <div className="profile-banner-section">
        <div className="profile-section">
          <div className="profile-pic"></div>
          <div className="user-info">
            {" "}
            <h1 className="name">Prahlad Bhat </h1>
            <p className="field">
              <span className="profile-icon">
                <MailIcon />
              </span>
              abcd@gmail.com
            </p>
            <p className="field">
              <span className="profile-icon">
                <PhoneIcon />
              </span>{" "}
              123456789
            </p>
            <p className="field">
              <span className="profile-icon">
                <CakeIcon />
              </span>{" "}
              12-09-9090
            </p>
            <p className="field">
              <span className="profile-icon">
                <ApartmentIcon />
              </span>{" "}
              HashedIn
            </p>
          </div>
        </div>
      </div>
      <div className="user-plan-details">
        <div className="coverage-details">
          <div className="coverage-image">
            <img src={group} alt="Cash" />
          </div>
          <div className="coverage-details-info">
            <h2>Group Policy : 1 Lac</h2>
          </div>
        </div>
        <div className="coverage-details">
          <div className="coverage-image">
            <img src={coverage_img} alt="Cash" />
          </div>
          <div className="coverage-details-info">
            <h2>Additional : 1 Lac</h2>
          </div>
        </div>
        <div className="family-details"></div>
      </div>
    </div>
  );
}
