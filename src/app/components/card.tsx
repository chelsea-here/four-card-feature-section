import React, { ReactNode } from "react";
import Image from "next/image";
import styles from "../css/page.module.scss";

type CardProps = {
  id: number;
  name: string;
  description: string;
  icon: string;
  iconAlt: string;
  color: string;
};

export default function CardComponent(props: CardProps) {
  const cardColor = {
    backgroundColor: `var(${props.color})`,
  };

  return (
    <article className={styles.card}>
      {/* the color bar needs to be unaffected by the padding of the card, hence the creation of a separate div */}
      <div className={styles.colorBar} style={cardColor}></div>
      <div className={styles.content}>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <div className={styles.iconContainer}>
          <Image
            src={props.icon}
            alt={props.iconAlt}
            width={64}
            height={64}
            className={styles.icon}
          />
        </div>
      </div>
    </article>
  );
}
