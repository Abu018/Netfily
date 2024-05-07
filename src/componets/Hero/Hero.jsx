import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Abubakar Mohammad</h1>
        <p className={styles.description}>
          I'm Mohammad Abubakar, a final year Computer Science student
          specializing in React, JSX, JavaScript, HTML, and CSS. As a Frontend
          Engineer, I've built cryptocurrency trackers and expense management
          apps with sleek UI designs using Tailwind CSS. Eager to expand my
          skills, I'm seeking new opportunities in AI and ML, passionate about
          innovative projects and challenges.
        </p>
      </div>

      <img
        src={getImageUrl("hero/Main.png")}
        alt="Hero"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
