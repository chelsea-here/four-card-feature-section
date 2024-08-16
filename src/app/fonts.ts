import { Poppins } from "next/font/google";

export const poppins_init = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "600"],
  variable: "--font-poppins",
});

export const poppins = poppins_init.variable;
