import React from "react";
import "./styles/footer.scss";
import { IoLogoGithub } from "react-icons/io";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { data } from "./components/footerdata";
import { MdEmail } from "react-icons/md";

const frame = () => {
  return (
    <section className="container">
      <div className="title_container">
        <div className="liner"></div>
        <h7>Let's Connect @</h7>
        <div className="liner"></div>
      </div>
      <div className="icons">
        <a
          href={`mailto:${data["email"]}`}
          rel="noopener noreferrer"
          target="_blank"
          className="icon_link"
        >
          <MdEmail className="each_icon" />
        </a>
        <a
          href={data["linkedIn"]}
          rel="noopener noreferrer"
          target="_blank"
          className="icon_link"
        >
          <GrLinkedinOption className="each_icon" />
        </a>
        <a
          href={data["github"]}
          rel="noopener noreferrer"
          target="_blank"
          className="icon_link"
        >
          <IoLogoGithub className="each_icon" />
        </a>
        <a
          href={data["insta"]}
          rel="noopener noreferrer"
          target="_blank"
          className="icon_link"
        >
          <FaInstagram className="each_icon" />
        </a>
      </div>
    </section>
  );
};
export default frame;
