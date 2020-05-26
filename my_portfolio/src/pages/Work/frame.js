import React from "react";
import "./styles/frame.scss";
import data from "./components/companydata";
import { AiFillCaretRight } from "react-icons/ai";

const Workframe = () => {
  const [company, setCompany] = React.useState("cognizant");
  const companyHandler = (company) => {
    setCompany((prev) => company);
  };
  return (
    <section className="frame_container">
      <div className="work_container">
        <div className="title_container">
          <h1>Worked With</h1>
          <div className="liner"></div>
        </div>
        <div className="company_container">
          <div
            className={
              company === "cognizant"
                ? "companyCard lightning_border"
                : "companyCard"
            }
            onClick={() => {
              companyHandler("cognizant");
            }}
          >
            <h7>Cognizant</h7>
          </div>
          <div
            className={
              company === "cognizant"
                ? "companyCard"
                : "companyCard lightning_border"
            }
            onClick={() => {
              companyHandler("iupui");
            }}
          >
            <h7>IUPUI</h7>
          </div>
        </div>
        <div className="companyTitle">
          <h3>{data[company].name}</h3>
        </div>
        <div className="Designation">
          <h7>{data[company].info}</h7>
        </div>
        <div className="topic">
          <div className="client">
            <h7>Client:</h7>
            <a
              href={data[company].link}
              rel="noopener noreferrer"
              target="_blank"
            >
              {data[company].client}
            </a>
          </div>
          <div className="bullets">
            {data[company].bullets.map((list,index) => {
              return (
                <div className="point" key={index}>
                    <div className="arrow">
                  <AiFillCaretRight className="arrow_font"  />
                  </div>
              <h7>{list}</h7>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workframe;
