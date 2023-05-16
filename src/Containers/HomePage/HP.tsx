import "./styles.css";
import { useEffect } from "react";
import ReactDOM from "react-dom";

import pic1 from "../../Assets/Landing Page/1.svg";
import pic2 from "../../Assets/Landing Page/2.svg";
import pic3 from "../../Assets/Landing Page/3.svg";
import pic4 from "../../Assets/Landing Page/4.svg";
import pic5 from "../../Assets/Landing Page/5.svg";
import { Feature } from "../../Components/LandingPage/Feature/Feature";
import { Banner } from "../../Components/LandingPage/Banner/Banner";
import { SideBar } from "../../Components/Handy Access Button/SIdeBar";
import { FAQS } from "../../Components/FAQs/FAQS";
import SF from "../../Components/Services/SF";

export default function HP() {
  const images = [
    {
      image: pic1,
      title: "Create Group Policy",
      details:
        "Customize the group policy and create the best suited plan for your organization.",
    },
    {
      image: pic2,
      title: "View Policy Details",
      details:
        "View the details of the policy from various organizations listed on our website.",
    },
    {
      image: pic3,
      title: "Compare Policies",
      details:
        "Make comparison between policies using compare feature to deduce insights.",
    },
    {
      image: pic4,
      title: "Top Up Plans",
      details:
        "Add top up coverage to the Group Policy provided by your organization.",
    },
    {
      image: pic5,
      title: "Family Friendly",
      details:
        "Include Family members under the protection and cover of the Group Policy.",
    },
  ];
  useEffect(() => {
    window.addEventListener("scroll", (e: any) => scrollHandler(e));
  }, []);
  // const feature = (num: number) => {
  //   return (
  //     <div className="feature">
  //       <div className="feature-image">
  //         <img src={images[num - 1].image} alt="" />
  //       </div>
  //       <div className="feature-details">
  //         <h2>{images[num - 1].title}</h2>
  //         <p>
  //           This is an important feature .This is awesome.This is the best
  //           feature ever
  //         </p>
  //       </div>
  //     </div>
  //   );
  // };
  const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const node = document.querySelectorAll(
      ".features-container .features .feature"
    );
    node.forEach((node) => {
      if (node.getBoundingClientRect().top < (window.innerHeight * 4.75) / 5) {
        node.classList.add("appear");
      } else {
        node.classList.remove("appear");
      }
    });

    const node1 = document.querySelectorAll(
      ".features-container .features-1 .feature-slab"
    );
    node1.forEach((node) => {
      if (node.getBoundingClientRect().top < (window.innerHeight * 4.75) / 5) {
        node.classList.add("appear");
      } else {
        node.classList.remove("appear");
      }
    });
  };
  return (
    <div className="home-page">
      <Banner></Banner>
      <div className="features-container">
        <h1>What do we offer??</h1>
        <div className="features-1">
          {images.map((item) => {
            return (
              <Feature
                image={item.image}
                title={item.title}
                details={item.details}
              />
            );
          })}
        </div>
      </div>
      <div style={{margin:"60px 0"}}>
        <SF />
      </div>
      <FAQS />
    </div>
  );
}
