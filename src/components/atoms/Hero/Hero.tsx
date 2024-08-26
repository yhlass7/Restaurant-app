import React from "react";
import styles from "./Hero.module.scss";
interface HeroProps {
  title: string;
  subTitle: string;
}

const Hero: React.FC<HeroProps> = ({ title, subTitle }) => {
  return (
    <div className={styles["hero"]}>
      <h2 className={styles["hero__title"]}>{title}</h2>
      <p className={styles["hero__sub-title"]}>{subTitle}</p>
    </div>
  );
};

export default Hero;
