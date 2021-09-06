import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these AMAZING projects!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/Project1.jpg"
              text="My first group project"
              label="Project 1"
              path="/"
            />
            <CardItem
              src="images/project2.png"
              text="My second group project"
              label="Project 2"
              path="/"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="/images/run-buddy.png"
              text="My first ever website"
              label="HTML"
              path="/"
            />
            <CardItem
              src="images/original-portfolio.png"
              text="My original portfolio"
              label="Bootstrap"
              path="/"
            />
            <CardItem
              src="images/zookeepr.png"
              text="Learning JavaScript for the first time"
              label="JavaScript"
              path="/"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="/images/Weather-forecast.png"
              text="A weather Forecast using API keys"
              label="API"
              path="/"
            />
            <CardItem
              src="images/team-generator.png"
              text="Generating a team with inquirer"
              label="Inquirer"
              path="/"
            />
            <CardItem
              src="/images/Note-taker.png"
              text="A note taker using a Node framework"
              label="Express"
              path="/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
