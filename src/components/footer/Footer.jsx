import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import SocialMedia from "../ui/socialMedia/SocialMedia";
import SmallText from "../ui/textStyles/SmallText";

const Footer = () => {
  return (
    <section className="absolute bottom-0 right-0 left-0 ">
      <SocialMedia url={"https://github.com/DiegoEMartinezZ"} img={faGithub} />
      <SmallText />
    </section>
  );
};

export default Footer;
