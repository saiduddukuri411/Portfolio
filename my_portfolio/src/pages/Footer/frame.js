import React from "react";
import "./styles/footer.scss";
import { IoLogoGithub } from "react-icons/io";
import { FaInstagram,FaFacebook } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
 

const frame = () => {
  return (
    <section className="container">
      <div className="title_container">
        <div className="liner"></div>
        <h7>Let's Connect @</h7>
        <div className="liner"></div>
      </div>
      <div className="icons">
        
        <GrLinkedinOption className="each_icon" />
        <IoLogoGithub className="each_icon" />
        <FaInstagram className="each_icon" />
        <FaFacebook className="each_icon" />
      </div>
    </section>
  );
};
export default frame;
