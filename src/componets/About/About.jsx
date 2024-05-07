import React from "react";
import { getImageUrl } from "../../utils";
import styleSheet from "./About.module.css";
export const About = () => {
  return (
    <section className={styleSheet.container}>
      <h2 className={styleSheet.title}>About</h2>
      <div className={styleSheet.content}>
        <img
          src={getImageUrl("about/abu017.png")}
          alt="Me sitting with laptop"
          className={styleSheet.aboutImage}
        ></img>
        <ul className={styleSheet.aboutItems}>
          <li className={styleSheet.aboutItem}>
            <img src={getImageUrl("about/react-100.png")} alt="React"></img>
            <div>
              <h3>Frontend Developer</h3>
              <p>
                I am Frontend Developer , As Fresher Looking for Oppurtines and
                made serveral proejcts on using react .
              </p>
            </div>
          </li>

          <li className={styleSheet.aboutItem}>
            <img src={getImageUrl("about/nodejs-96.png")} alt="node"></img>
            <div>
              <h3>Backend Developer</h3>
              <p>
                Learing Nodejs Developer . Currently working on the backend{" "}
              </p>
            </div>
          </li>
          <li className={styleSheet.aboutItem}>
            <img
              src={getImageUrl("about/tailwind-css-96.png")}
              alt="tailwindCss"
            ></img>
            <div>
              <h3>Tailwind</h3>
              <p>made a small project using tailwind </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
