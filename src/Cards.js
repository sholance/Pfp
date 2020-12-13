import React from "react";
import "./App.css";
import webdesign2 from "./assets/webdesign2.svg";
import webdev from "./assets/webdev.svg";
import mobile from "./assets/mobile.svg";
import techw from "./assets/techw.svg";
import write from "./assets/write.svg";
import music from "./assets/music.svg";

function Cards() {
  return (
    <div className="cards__container">
      <div className="cards__wrapper">
        <div className="cards">
          <div className="card__media">
            <img src={webdesign2} className="card0" alt="web development" />
          </div>

          <div className="card__header">web dev</div>
          <div className="card__text">
            <p className="card__content">
              Building website shouldn't be the hard part of starting out
              online. You should be able to launch your app, websites, and
              products in days, not months.
            </p>
          </div>
        </div>
        <div className="cards">
          <div className="card__media card1">
            <img src={mobile} className="card0" alt="web development" />
          </div>

          <div className="card__header">mobile app dev</div>
          <div className="card__text">
            <p className="card__content">
              Shola specializes in media apps, mobile stores, and Financial
              apps. I am on a mission to provide mobile access to all Africans,
              and by extension the world.
            </p>
          </div>
        </div>
        <div className="cards">
          <div className="card__media card2">
            <img src={webdev} className="card0" alt="web development" />
          </div>

          <div className="card__header">web design</div>
          <div className="card__text">
            <p className="card__content">
              Shola offers web design services, serving small to medium size
              businesses with affordable solutions. Shola’s designs are clean
              and simple, featuring well-thought strategies.
            </p>
          </div>
        </div>
        <div className="cards">
          <div className="card__media card3">
            <img src={techw} className="card0" alt="web development" />
          </div>
          <div className="card__header">Technical writing</div>
          <div className="card__text">
            <p className="card__content">
              Your tech docs can be confusing. Instead of getting an abstracted
              idea “it explains how something works,” you want an actual person
              understanding a problem. We do that with words. Lots of them.
            </p>
          </div>
        </div>
        <div className="cards">
          <div className="card__media card4">
            <img src={write} className="card0" alt="web development" />
          </div>

          <div className="card__header">Script Writing</div>
          <div className="card__text">
            <p className="card__content">
              Fun fact is I am also ready to deliver premium scripts for your
              video ads with experience and a lot more reliablity. I am
              currently accepting all your script requests
            </p>
          </div>
        </div>
        <div className="cards">
          <div className="card__media card5">
            <img src={music} className="card0" alt="web development" />
          </div>

          <div className="card__header">Music</div>
          <div className="card__text">
            <p className="card__content">
              Definetly my escape plan...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
