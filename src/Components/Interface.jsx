import React from "react";
import styles from "../app.module.css";
import { motion } from "framer-motion";
import { SkillsSvg } from "./SkillsSvg";
import FadeIn from "./FadeIn";

const Section = (props) => {
  const { children, backgroundColor, className } = props;

  return (
    <>
      <section
        className={`${className}`}
        style={{ backgroundColor }}
      >
        {children}
      </section>
    </>
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
    <Section className={`${styles.interfaceSection}  interface-part interface-welcome`}>
      <div className="ctas">
      <h1 className="main-text">Hi, Traders <br/> Welcome to Goodwill Education </h1> 
      <h3>Learn and earn from our online course</h3>
      <a href="#" className="cta-btn">Get in touch</a>
    
      </div>
    </Section>
  );
};

const Skills = (props) => {
  const { section, device } = props;
  return (
    <Section className={`${styles.interfaceSection2} interface-part interface-skills`}>
      <SkillsSvg  section={section} className={`${styles.svgsection}`}></SkillsSvg>
    </Section>
  );
};

const Courses = () => {
  return (
    <Section>
      <h1></h1>
    </Section>
  );
};

const Contact = () => {
  return (
    <Section>
      <h1></h1>
    </Section>
  );
};
