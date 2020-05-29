import React from "react";
import "./styles/frame.scss";
import { FaUserGraduate } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

const Resumeframe = () => {
  return (
    <section className="frame_container">
      <div className="resume">
        <div className="resumeHeader">
          <div className="header_card">
            <FiPhoneCall className="resumeIcon" />
            <h7>317-909-3441</h7>
          </div>
          <div className="header_card hidden">
            <FaUserGraduate className="resumeIcon " />
            <h7>Sai Duddukuri</h7>
          </div>
          <div className="header_card hidden">
            <AiOutlineMail className="resumeIcon " />
            <h7>sai.duddukuri@gmail.com</h7>
          </div>
        </div>
        <div className="education">
          <h7>
            <span className="edu">Education:</span>{" "}
          </h7>
          <h7>
            MS in CS, &nbsp;
            <a
              href="https://cs.iupui.edu/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="college">Purdue University, </span>
            </a>
            IP.
          </h7>
        </div>
        <div className="work">
          <h7>What's Next?</h7>
        </div>
        <div className="future">
          <h7>
            I am currently looking for a software engineer internship
            opportunity for the summer of 2021. Giving pace to my skill set in
            various technologies, I would like to give my best for the hired
            position. If my skill set matches your requirement, kindly reach out
            to me as my inbox is always open for you...!
          </h7>
        </div>
        <div className="resume">
            <div className="button">
                <h7>Resume</h7>
            </div>
        </div>
      </div>
    </section>
  );
};
export default Resumeframe;
