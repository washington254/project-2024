import React from "react";
import styles from "../app.module.css";
import { motion } from "framer-motion";
import { SkillsSvg } from "./SkillsSvg";
import { useState } from "react";

const Section = (props) => {
  const { children, backgroundColor, className } = props;

  return (
    <>
      <section className={`${className}`} style={{ backgroundColor }}>
        {children}
      </section>
    </>
  );
};
const Carousel = () => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const carouselItems = [
    {
      image: "/1.png",
      title: "Item 1",
      description: "Description for Item 1",
      cta: "Action Button 1",
    },
    {
      image: "/2.png",
      title: "Item 2",
      description: "Description for Item 2",
      cta: "Action Button 2",
    },
    {
      image: "/3.png",
      title: "Item 3",
      description: "Description for Item 3",
      cta: "Action Button 3",
    },
    {
      image: "/4.png",
      title: "Item 4",
      description: "Description for Item 4",
      cta: "Action Button 4",
    },
    {
      image: "/5.png",
      title: "Item 5",
      description: "Description for Item 5",
      cta: "Action Button 5",
    },
      {
      image: "/6.png",
      title: "Item 6",
      description: "Description for Item 6",
      cta: "Action Button 5",
    },

  ];

  const handlePrevious = () => {
    setCurrentItemIndex(
      currentItemIndex === 0 ? carouselItems.length - 1 : currentItemIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentItemIndex(
      currentItemIndex === carouselItems.length - 1 ? 0 : currentItemIndex + 1,
    );
  };

  return (
    <Section className={"carousel"}>
      <h1>OUR COURSES</h1>
      <div className={"itemContainer"}>
        {carouselItems.map((item, index) => (
          <div key={index} className={`${"carouselItem"}`}>
            <img
              src={item.image}
              alt={`Item ${index + 1}`}
              className={"itemImage"}
            />
            <h3 className={"itemTitle"}>{item.title}</h3>
            <p className={"itemDescription"}>{item.description}</p>
            <button className={"actionButton"}>{item.cta}</button>
          </div>
        ))}
      </div>
      <div className={"navigation"}>
        <button className={"previousButton"} onClick={handlePrevious}>
          &lt;
        </button>
        <button className={"nextButton"} onClick={handleNext}>
          &gt;
        </button>
      </div>
    </Section>
  );
};

export function Interface(props) {
  const { section, device } = props;
  return (
    <div className={`${styles.interface} interface`}>
      <Navbar />
      <AboutSection />
      <Skills section={section} />
      <Courses />
      <Contact />
      <Footer />
    </div>
  );
}

const AboutSection = () => {
  return (
    <Section
      className={`${styles.interfaceSection}  interface-part interface-welcome`}
    >
     
      <div className="ctas">
       
        <h1 className="main-text">
          Hi, Traders <br /> Welcome to Goodwill Education{" "}
        </h1>
        <h3>Learn and earn from our online course</h3>
        <a href="#" className="cta-btn">
          Get in touch
        </a>
      </div>
    </Section>
  );
};

const Skills = (props) => {
  const { section, device } = props;
  return (
    <Section
      className={`${styles.interfaceSection2} interface-part interface-skills`}
    >
      <SkillsSvg
        section={section}
        className={`${styles.svgsection}`}
      ></SkillsSvg>
    </Section>
  );
};

const Courses = () => {
  return <Carousel />;
};

const Contact = () => {
  return (
    <Section className="contact-container">
     <div className="contact-left">
      <h2 className="heading-contact">Contact Us</h2>
      <div className="contact-form">
        <form>
          <label htmlFor="name" className="label">
            Name
          </label>
          <input type="text" name="name" id="name" className="input" />
          <label htmlFor="number" className="label">
            Phone Number
          </label>
          <input type="number" name="number" id="number" className="input" />

          <label htmlFor="email" className="label">
            Email
          </label>
          <input type="email" name="email" id="email" className="input" />

          <label htmlFor="message" className="label">
            Message
          </label>
          <textarea name="message" id="message" className="textarea" />
          <button className="submit-button">Submit</button>
        </form>
      </div>
     </div>
      <div className="contact-right">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, inventore.</p>
      </div>
    </Section>
  );
};


const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="logo">
      <img src="./logo.svg" alt="logo" />
    </div>
    {/* <h1>LOGO</h1> */}
    <a href="#" className="cta-btn">
      Subscribe
    </a>

  </nav>
  )
}
const Footer = () => {
  return (
    <footer>
      <ul>
        <li><a href="#">LINK ONE</a></li>
        <li><a href="#">LINK TWO</a></li>
        <li><a href="#">LINK THREE</a></li>
        <li><a href="#">LINK FOUR</a></li>
      </ul>
    </footer>
  )
}

