import React from "react";
import styles from "./FoodDelivery.module.scss";
import DeliveryOrderCard from "@/components/atoms/deliveryOrderCard";
import Button from "@/components/atoms/button";
import Image, { StaticImageData } from "next/image";
import imageDelivery from "@/../public/images/image_delivery.png";

interface FoodDeliveryProps {
  supTitle: string;
  title: string;
  text: string;
  imageDelivery: StaticImageData | string;
}

export const FoodDelivery: React.FC<FoodDeliveryProps> = ({
  supTitle,
  title,
  text,
}) => {
  return (
    <div className={styles["delivery"]}>
      <h5 className={styles["delivery__sup-title"]}>{supTitle}</h5>
      <div className={styles["delivery__content"]}>
        <div className={styles["delivery__info"]}>
          <article className={styles["delivery__description"]}>
            <h2 className={styles["delivery__title"]}>{title}</h2>
            <p className={styles["delivery__text"]}>{text}</p>
          </article>
          <div className={styles["delivery__actions"]}>
            <DeliveryOrderCard title="Delivery Order" tel="+880 1630 225 015" />
            <Button size="medium">Order Now</Button>
          </div>
        </div>
        <div className={styles["delivery__image"]}>
          <Image src={imageDelivery} fill alt={"dd"} />
        </div>
      </div>
    </div>
  );
};
