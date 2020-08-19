import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img className="cover" src={require("./header.jpg")} alt="error" />
      <div className="header-content">
        <h2 className="cover-h2">
          For All Ocassions Hairstyle is a must Try Fasion
        </h2>
        <p className="cover-p">
          Lorem nisi incididunt ea cupidatat cupidatat id anim esse qui et.
        </p>
        <button className="appoint-button" type="button">
          appointment
        </button>
      </div>
    </div>
  );
};

export default Header;
