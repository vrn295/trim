import React from "react";

import "./About.css";

const About = () => {
  return (
    <div className="body">
      <div className="nav-service">
        {/* <img
            src={require("./service-img1.jpg")}
            className="service-container"
          ></img> */}
        <h1 className="about-us">About Us</h1>
      </div>
      <div className="barbers">
        <img
          className="barber-1"
          src={require("./barber-1.png")}
          alt="not"
        ></img>

        <img
          className="barber-2"
          src={require("./barber-2.png")}
          alt="not"
        ></img>
        <div className="b-name">
          <h2 className="b1-name">Alex Parker</h2>
          <h2 className="b2-name">Peter Harrison</h2>
          <p className="b1-p">
            Velit quis ipsum esse incididunt aliqua irure incididunt voluptate
            mollit mollit minim ad. Labore ex laboris incididunt ex ut duis
            officia do adipisicing ullamco quis pariatur id. Labore ad Lorem
            elit pariatur Lorem mollit irure commodo exercitation quis excepteur
            veniam.
          </p>
          <p className="b2-p">
            Id et excepteur laborum velit esse ad excepteur officia labore.
            Incididunt do sit voluptate proident irure incididunt cupidatat non
            irure mollit esse cupidatat. Veniam ad fugiat aliqua deserunt dolor
            elit ullamco. Aliqua minim non magna enim adipisicing laborum
            reprehenderit.
          </p>
        </div>
      </div>
      <div className="history">
        <h2 className="history-h">Our History</h2>
        <p className="history-p">
          Consequat eu voluptate nisi officia non aliqua. Sint et irure enim
          esse exercitation mollit ullamco. Voluptate anim proident eiusmod
          minim magna ut deserunt irure occaecat id veniam duis excepteur. Qui
          anim mollit cupidatat aliqua reprehenderit in reprehenderit culpa elit
          quis incididunt. Adipisicing reprehenderit quis proident Lorem
          exercitation magna. Cillum cillum duis mollit reprehenderit eiusmod
          occaecat nulla quis mollit cillum tempor aliqua. Deserunt eu nostrud
          ea proident laborum elit aliquip occaecat dolore. Velit labore amet
          tempor labore duis minim. Laborum quis eu enim tempor. Labore labore
          elit adipisicing aliquip magna sit culpa nulla enim consectetur ut
          laboris. Reprehenderit aliquip elit ex dolore ea occaecat. Laboris
          duis anim reprehenderit nostrud consequat labore do ad et. Laboris
          reprehenderit eiusmod duis culpa ex commodo occaecat anim consequat
          eiusmod sint magna. Voluptate cillum adipisicing exercitation dolor.
          Officia minim quis officia elit. Anim Lorem deserunt laboris ad
          ullamco minim irure cillum mollit. Minim mollit laboris incididunt ea
          commodo consectetur ad cillum aliqua Lorem. Deserunt commodo non
          officia aliqua cupidatat. Eiusmod exercitation non commodo est qui
          officia officia sunt enim fugiat incididunt in anim. Est adipisicing
          et sunt adipisicing commodo elit magna cupidatat. Sit consectetur
          incididunt sint do mollit est dolore amet aute dolor et.
        </p>
      </div>

      <div className="about-gallery">
        <div className="row">
          <div className="column">
            <img
              className="about-img"
              src={require("./About-1.jpg")}
              alt="Not Fount"
            ></img>
            <img
              className="about-img"
              src={require("./About-2.jpg")}
              alt="Not Fount"
            ></img>
          </div>
          <div className="column">
            <img
              className="about-img"
              src={require("./About-3.jpg")}
              alt="Not Fount"
            ></img>
          </div>
          <div className="column">
            <img
              className="about-img"
              src={require("./About-4.jpg")}
              alt="Not Fount"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
