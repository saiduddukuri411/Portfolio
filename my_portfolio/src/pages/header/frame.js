import React from "react";
import "./styles/frame.scss";
import Image from "../../images/Capture.PNG";
import { headerData } from "./component/headerdata";
import Card from "./component/card";
import {Link} from 'react-router-dom'

const Frame = () => {
  return (
    <header className="header_container">
      <div className="inner_container">
        <div className="sIcon">
          <Link to="/" style={{textDecoration:"none"}}>
          <img src={Image} alt="name_icon" />
          </Link>
        </div>
        <div className="right_container">
          {headerData.map((list, index) => {
            return <Card key={index} title={list.title} link={list.link}/>;
          })}
        </div>
      </div>
    </header>
  );
};
export default Frame;
