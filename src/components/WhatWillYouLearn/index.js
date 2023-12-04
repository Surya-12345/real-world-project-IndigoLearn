import React from "react";
import "./index.css";

const WhatWillYouLearn = () => {
  return (
    <>
    <div className="learn-container">
      <div>
        <div className="main-container">
          <h1 className="heading">What will you Learn in ACCA?</h1>
          <hr className="hr" />
        </div>
        <div className="learn-cards">
          <div className="learn-card">
            <div>
              <h1 className="learn-heading">Knowledge Level</h1>
              <ul className="list">
                <li>Business and Technology (BT)</li>
                <li>Management Accounting (MA)</li>
                <li>Financial Accounting (FA)</li>
              </ul>
            </div>
            <h1 className="footer">3 Papers</h1>
          </div>
          <div className="learn-card">
            <div>
              <h1 className="learn-heading">Skill Level</h1>
              <ul className="list">
                <li>Corporate ans Business law (LW)</li>
                <li>Performance Management (PM)</li>
                <li>Taxation (TX)</li>
                <li>Financial Reporting (FR)</li>
                <li>Audit and Assurance (AA)</li>
                <li>Financial Management (FM)</li>
              </ul>
            </div>
            <h1 className="footer">6 Papers</h1>
          </div>
          <div className="learn-card">
            <div>
              <h1 className="learn-heading">Professional Level</h1>
              <h1 className="list-heading">Compulsory</h1>
              <ul className="list">
                <li>SBL - Strategic Business Leader</li>
                <li>SBR - Strategic Business Reporting</li>
              </ul>
              <h1 className="list-heading">Two out of the following</h1>
              <ul className="list">
                <li>Advanced Financial Management (AFM)</li>
                <li>Advanced Performance Management (APFM)</li>
                <li>Advanced Taxation (ATX)</li>
                <li>Advanced Audit and Assurance (AAA)</li>
              </ul>
            </div>
            <h1 className="footer">3 Papers</h1>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default WhatWillYouLearn;
