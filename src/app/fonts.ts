import { Montserrat, Fraunces } from "next/font/google";

export const mont_init = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "700"],
  variable: "--font-mont",
});
export const fraunces_init = Fraunces({
  subsets: ["latin"],
  display: "swap",
  weight: ["700"],
  variable: "--font-fraunces",
});

export const mont = mont_init.variable;
export const fraunces = fraunces_init.variable;
