// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";

// // Importing Images
// import ghi_image from "../../Assets/Images/group-health-insurance-coverage.jpg";
// import covered_image from "../../Assets/Images/covered.jpg";
// // import adv_image from "../../Assets/Images/advantage.jpeg";
// import adv_image from "../../Assets/Images/advantage.jpg";

// //Importing Css
// import "./About.css";

// //Importing Icons
// import CheckIcon from "@mui/icons-material/Check";
// import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
// // import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

// import advImage from "../../Assets/Images/Benefits-of-Long-Term-Health-Insurance.jpg";
// import Footer from "../Footer/Footer";

// export default function About() {
//   return (
//     <Box sx={{ width: "100%" }} className="font">
//       {/* NavigationBar */}

//       {/* Has to be Added */}

//       {/* First Image */}
//       <Box
//         sx={{
//           display: "flex",
//           width: "1400px",
//           "max-width": "100%",
//           margin: "20px auto",
//           "flex-wrap": "wrap",
//         }}
//       >
//         <Box sx={{ width: "500px", maxWidth: "100%", flex: "1" }}>
//           <div className="font" style={{ margin: "0 auto" }}>
//             <h1 className="about-heading spacing-heading">
//               What is Group Health Insurance?
//             </h1>
//             <p
//               style={{ fontSize: "26px", lineHeight: "1.5", marginTop: "50px" }}
//               className="spacing-body"
//             >
//               Group health insurance cover is offered to the employees of an
//               organization, which can also be extended to cover their family.
//               The policy covers indemnification of medical expenses incurred by
//               the insured during hospitalization & any illness or injury
//               suffered in India. Pre & Post hospitalisation medical expenses can
//               be covered upto 30 days and 60 days and covers age from 91 days to
//               80 years.
//             </p>
//           </div>
//         </Box>
//         <Box sx={{ flex: "1" }}>
//           <img
//             src={ghi_image}
//             alt=""
//             style={{
//               height: "500px",
//               maxWidth: "100%",
//               display: "block",
//               objectFit: "cover",
//               backgroundRepeat: "no-repeat",
//               marginRight: "300px",
//             }}
//           ></img>
//         </Box>
//       </Box>

//       {/* Scope */}

//       <Box
//         sx={{
//           display: "flex",
//           width: "1400px",
//           "max-width": "100%",
//           margin: "100px auto",
//           "flex-wrap": "wrap",
//         }}
//       >
//         <Box sx={{ flex: "1" }}>
//           <img
//             src={covered_image}
//             alt=""
//             style={{
//               height: "500px",
//               maxWidth: "100%",
//               display: "block",
//               objectFit: "cover",
//               backgroundRepeat: "no-repeat",
//               marginRight: "300px",
//             }}
//           ></img>
//         </Box>
//         <Box sx={{ width: "500px", maxWidth: "100%", flex: "1" }}>
//           <div
//             className="font"
//             style={{ margin: "20px auto", paddingLeft: "20px" }}
//           >
//             <h1 className="about-heading" style={{ marginBottom: "50px" }}>
//               What is covered in our policies?
//             </h1>
//             <p>
//               <CheckIcon className="icon-spacing"></CheckIcon>Pre &amp; Post
//               Hospitalisation
//             </p>
//             <p>
//               <CheckIcon className="icon-spacing"></CheckIcon>Pre-existing
//               disease
//             </p>
//             <p>
//               <CheckIcon className="icon-spacing"></CheckIcon>Maternity expenses
//             </p>
//             <p>
//               <CheckIcon className="icon-spacing"></CheckIcon>In-patient
//               department expenses
//             </p>
//             <p>
//               <CheckIcon className="icon-spacing"></CheckIcon>Diagnostic Test
//               expenses
//             </p>
//           </div>
//         </Box>
//       </Box>

//       <Box
//         sx={{
//           display: "flex",
//           width: "1400px",
//           "max-width": "100%",
//           margin: "100px auto",
//           "flex-wrap": "wrap",
//         }}
//       >
//         <Box sx={{ width: "500px", maxWidth: "100%", flex: "1" }}>
//           <div className="font" style={{ margin: "20px auto" }}>
//             <h1 className="about-heading spacing-heading">Advantages</h1>
//             <Grid className="font">
//               <ul
//                 className="spacing-body spacing-advantages"
//                 style={{ listStyleType: "none" }}
//               >
//                 <li>
//                   <ArrowRightAltIcon className="icon-spacing"></ArrowRightAltIcon>{" "}
//                   No physical health checkup
//                 </li>
//                 <li>
//                   <ArrowRightAltIcon className="icon-spacing"></ArrowRightAltIcon>
//                   Covers people regardless of their age
//                 </li>
//                 <li>
//                   <ArrowRightAltIcon className="icon-spacing"></ArrowRightAltIcon>
//                   Customized health care
//                 </li>
//                 <li>
//                   <ArrowRightAltIcon className="icon-spacing"></ArrowRightAltIcon>
//                   Boosts employee morale
//                 </li>
//                 <li>
//                   <ArrowRightAltIcon className="icon-spacing"></ArrowRightAltIcon>
//                   Affordable health insurance policy
//                 </li>
//                 <li>
//                   <ArrowRightAltIcon className="icon-spacing"></ArrowRightAltIcon>
//                   Family is covered in the given sum insured
//                 </li>
//               </ul>
//             </Grid>
//           </div>
//         </Box>
//         <Box sx={{ flex: "1" }}>
//           <img
//             src={adv_image}
//             alt=""
//             style={{
//               height: "500px",
//               maxWidth: "100%",
//               display: "block",
//               objectFit: "cover",
//               backgroundRepeat: "no-repeat",
//               marginRight: "300px",
//             }}
//           ></img>
//         </Box>
//       </Box>

//       <Footer />
//     </Box>
//   );
// }
import "./about.css";
import CheckIcon from "@mui/icons-material/Check";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import about from "../../Assets/About us/group.svg";
import Footer from "../Footer/Footer";
import { useEffect } from "react";
import { InsuranceCompanies } from "../InsuranceCompanies/InsuranceCompanies";
function About() {
  useEffect(() => {
    const cards = document.querySelectorAll(".about-us-cards-container .card");
    cards.forEach((card) => {
      card.classList.add("appear");
    });
  });
  return (
    <div className="about-us-container">
      <div className="data-section">
        <div className="data">
          <h1 className="question-heading">What is Group Insurance?</h1>
          <p className="explanation">
            Group health insurance cover is offered to the employees of an
            organization, which can also be extended to cover their family. The
            policy covers medical expenses incurred by the insured .
          </p>
        </div>
        <div className="image">
          <img src={about} alt="" />
        </div>
      </div>
      <div className="about-us-cards-container">
        <div className="card">
          <h2>What is covered in the policies?</h2>
          <div className="list-points-about-us">
            <p>
              <span className="check-icon-about-us">
                <CheckIcon />
              </span>{" "}
              <span>Pre &amp; Post Hospitalisation</span>
            </p>
            <p>
              <span className="check-icon-about-us">
                <CheckIcon />
              </span>{" "}
              <span>Pre-existing disease</span>
            </p>
            <p>
              <span className="check-icon-about-us">
                <CheckIcon />
              </span>{" "}
              <span>Maternity expenses</span>
            </p>
            <p>
              <span className="check-icon-about-us">
                <CheckIcon />
              </span>{" "}
              <span>In-patient department expenses</span>
            </p>
            <p>
              <span className="check-icon-about-us">
                <CheckIcon />
              </span>{" "}
              <span>Diagnostic Test expenses</span>
            </p>
          </div>
        </div>
        <div className="card">
          <h2>Advantages</h2>
          <div className="list-points-about-us">
            <p>
              <span className="check-icon-about-us">
                <CheckIcon />
              </span>{" "}
              <span>No physical health checkup</span>
            </p>
            <p>
              <span className="check-icon-about-us">
                <CheckIcon />
              </span>{" "}
              <span>Covers people regardless of their age</span>
            </p>
            <p>
              <span className="check-icon-about-us">
                <CheckIcon />
              </span>{" "}
              <span>Customized health care</span>
            </p>
            <p>
              <span className="check-icon-about-us">
                <CheckIcon />
              </span>{" "}
              <span>Boosts employee morale</span>
            </p>
            <p>
              <span className="check-icon-about-us">
                <CheckIcon />
              </span>{" "}
              <span>Affordable health insurance policy</span>
            </p>
          </div>
        </div>
      </div>
      <InsuranceCompanies />
      <Footer />
    </div>
  );
}
export default About;
