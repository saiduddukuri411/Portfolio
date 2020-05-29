import React from "react";
import "./styles/frame.scss";
import hotel from "../../images/hotel.PNG";
import { GoMarkGithub } from "react-icons/go";
import { BsBoxArrowUpRight } from "react-icons/bs";
import data from "./components/projectdata";

const Projectframe = () => {
  return (
    <section className="project_container">
      <div className="projects">
        <div className="title_container">
          <h1>Things I Built</h1>
          <div className="proj-liner">
            <div className="liner"></div>
          </div>
        </div>
        

        {data.map((list, index) => {
          return (
            <div key={list.id} className="each_project">
              <div className="proj_image">
                <a href={list.link} rel="noopener noreferrer" target="_blank">
                  <img src={list.img} alt="hotel_proj" />
                </a>
              </div>
              <div className="proj_card">
                <div className="proj_title">
                  <a href={list.link} rel="noopener noreferrer" target="_blank">
                    <h7 className="pro_name">
                      Featuring: <span>{list.name}</span>
                    </h7>
                  </a>
                </div>
                <div className="des_container">
                  <div className="desc">
                    <h7>
                      {list.desc}
                    </h7>
                  </div>
                </div>
                <div className="tech">
                  {list.lang.map((lang,index)=>{
                    return(<h7 key={index}>{lang}</h7>);
                  })}
                  
                </div>
                <div className="navigations">
                  <a
                    href={list.git}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <GoMarkGithub className="rIcon" />
                  </a>
                  <a
                    href={list.link}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <BsBoxArrowUpRight className="rIcon" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}

        
      </div>
    </section>
  );
};

export default Projectframe;
