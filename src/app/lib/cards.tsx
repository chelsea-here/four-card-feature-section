import { redirect } from "next/dist/server/api-utils";
import styles from "../css/page.module.scss";
import "react";

declare module "react" {
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }
}

type Card = {
  id: number;
  name: string;
  description: string;
  icon: string;
  iconAlt: string;
  color: string;
};

export const cards: Card[] = [
  {
    id: 0o01,
    name: "Supervisor",
    description: "Monitors activity to identify project roadblocks",
    icon: "icon-supervisor.svg",
    iconAlt: "Supervisor icon",
    color: "--secondary-color-teal",
  },
  {
    id: 0o02,
    name: "Team Builder",
    description:
      "Scans our talent network to create the optimal team for your project",
    icon: "icon-team-builder.svg",
    iconAlt: "Team builder icon",
    color: "--secondary-color-red",
  },
  {
    id: 0o03,
    name: "Karma",
    description: "Regularly evaluates our talent to ensure quality",
    icon: "icon-karma.svg",
    iconAlt: "Karma icon",
    color: "--secondary-color-orange",
  },
  {
    id: 0o04,
    name: "Calculator",
    description:
      "Uses data from past projects to provide better delivery estimates",
    icon: "icon-calculator.svg",
    iconAlt: "Calculator icon",
    color: "--secondary-color-blue",
  },
];
