import React from "react";
import cameraman from "../img/cameraman.png";
import { About, Description, Image, Hide } from "../styles";
//Framer motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>Hello</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              I am <span>John.</span>
            </motion.h2>
          </Hide>
        </div>
        <motion.p variants={fade}>
          Web developer and UI/UX designer based in Ohio
        </motion.p>
        <Link to="/contact">
          <motion.button variants={fade}>Contact me</motion.button>
        </Link>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={cameraman} alt="cameraman" />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
