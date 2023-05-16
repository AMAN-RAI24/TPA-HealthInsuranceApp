// import "./about.css";
// import CheckIcon from "@mui/icons-material/Check";
// import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
// import about from "../Assets/About us/group.svg";
// import Footer from "../Components/Footer/Footer";
// function TestRoute() {
//   return (
//     <div className="about-us-container">
//       <div className="data-section">
//         <div className="data">
//           <h1 className="question-heading">What is Group Insurance?</h1>
//           <p className="explanation">
//             Group health insurance cover is offered to the employees of an
//             organization, which can also be extended to cover their family. The
//             policy covers medical expenses incurred by the insured .
//           </p>
//         </div>
//         <div className="image">
//           <img src={about} alt="" />
//         </div>
//       </div>
//       <div className="about-us-cards-container">
//         <div className="card">
//           <h2>What is covered in the policies?</h2>
//           <div className="list-points-about-us">
//             <p>
//               <span className="check-icon-about-us">
//                 <CheckIcon />
//               </span>{" "}
//               <span>Pre &amp; Post Hospitalisation</span>
//             </p>
//             <p>
//               <span className="check-icon-about-us">
//                 <CheckIcon />
//               </span>{" "}
//               <span>Pre-existing disease</span>
//             </p>
//             <p>
//               <span className="check-icon-about-us">
//                 <CheckIcon />
//               </span>{" "}
//               <span>Maternity expenses</span>
//             </p>
//             <p>
//               <span className="check-icon-about-us">
//                 <CheckIcon />
//               </span>{" "}
//               <span>In-patient department expenses</span>
//             </p>
//             <p>
//               <span className="check-icon-about-us">
//                 <CheckIcon />
//               </span>{" "}
//               <span>Diagnostic Test expenses</span>
//             </p>
//           </div>
//         </div>
//         <div className="card">
//           <h2>Advantages</h2>
//           <div className="list-points-about-us">
//             <p>
//               <span className="check-icon-about-us">
//                 <ArrowRightAltIcon />
//               </span>{" "}
//               <span>No physical health checkup</span>
//             </p>
//             <p>
//               <span className="check-icon-about-us">
//                 <ArrowRightAltIcon />
//               </span>{" "}
//               <span>Covers people regardless of their age</span>
//             </p>
//             <p>
//               <span className="check-icon-about-us">
//                 <ArrowRightAltIcon />
//               </span>{" "}
//               <span>Customized health care</span>
//             </p>
//             <p>
//               <span className="check-icon-about-us">
//                 <ArrowRightAltIcon />
//               </span>{" "}
//               <span>Boosts employee morale</span>
//             </p>
//             <p>
//               <span className="check-icon-about-us">
//                 <ArrowRightAltIcon />
//               </span>{" "}
//               <span>Affordable health insurance policy</span>
//             </p>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

import { SystemSecurityUpdate } from "@mui/icons-material";
import axios from "axios";
import { url } from "inspector";
import { useState } from "react";
import { FAQS } from "../Components/FAQs/FAQS";
import constants from "../Utitlity/Constants/Constants";
function TestRoute() {
  const [file, setFile] = useState<any>();
  const formData = new FormData();
  return (
    // <div>
    //   <input
    //     type="file"
    //     name="file"
    //     id="file"
    //     onChange={(e) => {
    //       setFile(e.target.files);
    //       console.log(e.target.files);
    //     }}
    //   />
    //   <input
    //     type="button"
    //     value=""
    //     onClick={(e) => {
    //       formData.append("file", file[0]);
    //       console.log(file);
    //       axios({
    //         onUploadProgress: () => {
    //           console.log("djas");
    //         },
    //         url: constants.API_URL + "test-file",
    //         headers: {
    //           "Access-Control-Allow-Origin": "*",
    //           "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
    //           "Access-Control-Allow-Headers": "*",
    //           "Access-Control-Allow-Credentials": "true",
    //           "Content-Type": "multipart/form-data",
    //         },
    //         data: formData,
    //         method: "POST",
    //       });
    //     }}
    //   />
    // </div>
    <FAQS />
  );
}
export default TestRoute;
