import React from "react";
import "./index.css";

const Placements = () => {
  return (
    <>
      <div className="placement-container">
        <div className="main-container">
          <h1 className="heading">100% Placements Assistance</h1>
          <hr className="hr" />
        </div>
        <div className="matter-container">
          <h1 className="matter-heading">Resume Building</h1>
          <p className="matter-para">
            1FIN provides professional guidance to help you create an effective
            resume to help you create a lasting impression.
          </p>
          <h1 className="matter-heading">Career Counselling</h1>
          <p className="matter-para">
            We provide career counselling to conducting mock interviews and
            aptitude tests – we will assist you at every step, all the way, we
            make you job ready.
          </p>
          <h1 className="matter-heading">Jobs</h1>
          <p className="matter-para">
            We will give you an edge over others with our direct corporate
            affiliations which will ensure that you are placed right.
          </p>
        </div>
      </div>
    </>
  );
};

export default Placements;
