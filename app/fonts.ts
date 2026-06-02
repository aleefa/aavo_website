import { Inter, Sora } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  style: ["normal"],
  variable: "--font-inter",
});

export const sora = Sora({
  subsets: ["latin"],
  weight: "600",
  display: "swap",
  variable: "--font-sora-family",
});
