import React from "react";
import "./index.css";
import { SiGoogleforms } from "react-icons/si";
import { IoBookSharp } from "react-icons/io5";
import { ImPlay } from "react-icons/im";
import { MdGroup } from "react-icons/md";
import ModalDetails from "../Modal";

const Banner = () => {
  return (
    <>
      <div className="banner-container">
        <div className="content">
          <h1 className="banner-heading">Become ACCA in 18 months</h1>
          <p className="banner-para">
            Acquire globally recognized accountancy qualification.ACCA (also
            called as Global CA).and get placed in top MNCs & Bis Begin ACCA
            prep with 1FIN now.
          </p>
          <div className="cards">
            <div className="card-container">
                <p className="card-name"><SiGoogleforms size={20} /> User Registered</p>
                <p className="card-number">248,755</p>
            </div>
            <div className="card-container">
                <p className="card-name"><IoBookSharp size={20} /> Courses Enrolled</p>
                <p className="card-number">65,147</p>
            </div>
            <div className="card-container">
                <p className="card-name"><ImPlay size={20} /> Minutes Watched</p>
                <p className="card-number">2,088,021,687</p>
            </div>
            <div className="card-container">
                <p className="card-name"><MdGroup size={20} /> Faculty</p>
                <p className="card-number">8 Experts</p>
            </div>
          </div>
          <div className="btn-container">
            <button className="btn-1">Download Brochure</button>
            <button className="btn-2">Silver Learning Patner <br/> ACCA</button>
          </div>
        </div>
        <div className="form-container">
          <ModalDetails />
        </div>
      </div>
    </>
  );
};

export default Banner;
