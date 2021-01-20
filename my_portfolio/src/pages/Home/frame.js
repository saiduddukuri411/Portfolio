import React from "react";
import "./styles/frame.scss";
import image from "../../images/Profile.jpg";
import { IoMdArrowDropright } from "react-icons/io";

const technologies = [
  "Javascript(ES6+)",
  "HTML5 & CSS3",
  "React",
  "Python",
  "NodeJs",
  "Express",
  "Graphql",
  "postgreSQL",
  "MongoDB",
  "Prisma"
];

const Frame = () => {
  return (
    <section className="HomeContainer">
      <div className="aboutHolder">
        <div className="imageHolder">
          <img src={image} alt="profile" />
          <div className="backliner">
            <div className="title_container">
              <h6 className="name"> Sai Duddukuri</h6>
              <div className="lineHolder">
                <div className="line"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutMe">
          <div className="about_box">
            <div className="about_title">
              <h1>About Me</h1>
              <div className="liner"></div>
            </div>
            <div className="intro">
              <h7>Hello! This is Sai Duddukuri.</h7>
            </div>
            <div className="content1">
              <p>
                I am a software engineer based in Indianapolis. Currently, I am
                pursuing my masters degree from&nbsp;
                <span>Purdue University</span>.
              </p>
            </div>
            <div className="content1">
              <p>
                I enjoy building things that live on web.In particular I deal
                with web apps using <span>React</span>. Besides my education, I
                also build applications for&nbsp;<span>Purdue</span>. My passion
                drives me to work on wide varieties of technologies and my goal
                is to provide performant experience products.
              </p>
            </div>
            <div className="content1">
              <p>Below are a few technologies I am currently woking with:</p>
            </div>
            <div className="technologies">
              {technologies.map((tech) => {
                return (
                  <div className="tech_cards">
                    <IoMdArrowDropright className="right_icon" />
                    <h7>{tech}</h7>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Frame;
