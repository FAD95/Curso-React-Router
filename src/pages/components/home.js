import React, { Component, Fragment } from "react";
import "./home.scss";
import "animate.css";
import Dragon from "../../../images/monster.png";
import Coronavirus from "../../../images/coronavirus.png";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <main className="home animated tada delay-1s slow ">
          <div>
            <h1>Welcome to Platzi Video</h1>
            <p>A site to save your favorite videos</p>
            <p>
              The best place to see what coronavirus can do with my habilities
              in front-end
            </p>
          </div>
        </main>
        <section>
          <img className="Dragon" src={Dragon} alt="" />
        </section>
        <section>
          <img className="Coronavirus" src={Coronavirus} alt="" />
        </section>
      </Fragment>
    );
  }
}

export default Home;
