import React from "react";
import styles from "../app.module.css";
import { motion } from "framer-motion";
import { SkillsSvg } from "./SkillsSvg";
import FadeIn from "./FadeIn";

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
      image: "https://via.placeholder.com/300",
      title: "Item 1",
      description: "Description for Item 1",
      cta: "Action Button 1",
    },
    {
      image: "https://via.placeholder.com/300",
      title: "Item 2",
      description: "Description for Item 2",
      cta: "Action Button 2",
    },
    {
      image: "https://via.placeholder.com/300",
      title: "Item 3",
      description: "Description for Item 3",
      cta: "Action Button 3",
    },
    {
      image: "https://via.placeholder.com/300",
      title: "Item 4",
      description: "Description for Item 4",
      cta: "Action Button 4",
    },
    {
      image: "https://via.placeholder.com/300",
      title: "Item 5",
      description: "Description for Item 5",
      cta: "Action Button 5",
    },
    {
      image: "https://via.placeholder.com/300",
      title: "Item 6",
      description: "Description for Item 6",
      cta: "Action Button 6",
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
    <div className={"carousel"}>
      <div className={"itemContainer"}>
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`${"carouselItem"} ${
              index === currentItemIndex ? styles.active : ""
            }`}
          >
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
    </div>
  );
};

export function Interface(props) {
  const { section, device } = props;
  return (
    <div className={`${styles.interface} interface`}>
      <AboutSection />
      <Skills section={section} />
      <Courses />
      <Contact />
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
  return (
    <Section>
      <Carousel />
    </Section>
  );
};

const Contact = () => {
  return (
    <Section className="contact-container">
      <h2 className="heading-contact">Contact me</h2>
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
    </Section>
  );
};
