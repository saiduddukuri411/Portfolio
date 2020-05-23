import React from "react";
import "./styles/frame.scss";
import Image from "../../images/Capture.PNG";
import { headerData } from "./component/headerdata";
import Card from "./component/card";

const Frame = () => {
  return (
    <header className="header_container">
      <div className="inner_container">
        <div className="sIcon">
          <img src={Image} alt="name_icon" />
        </div>
        <div className="right_container">
          {headerData.map((list, index) => {
            return <Card key={index} title={list.title} />;
          })}
        </div>
      </div>
    </header>
  );
};
export default Frame;
