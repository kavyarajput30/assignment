import "./Programs.css";
import Card from "./Card";
import React from "react";

const Program = () => {
  return (
    <div id="main-program-div">
        <div>
        <h1 id="heading-program">Tech Programs</h1>
        <div id="program-heading-rectangle"></div>
        <div id="program-card-container">
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
        </div>
        <div>
        <h1 id="heading-program"> Non Tech Programs</h1>
        <div id="nontech-heading-rectangle"></div>
        <div id="program-card-container">
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
        </div>
        <div>
        <h1 id="heading-program">Undergrad and Postgrad Programs</h1>
        <div id="ug-pg-heading-rectangle"></div>
        <div id="program-card-container">
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
        </div>
      
    </div>
  );
};

export default Program;
