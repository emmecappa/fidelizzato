import { nextui } from "@nextui-org/react";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
  basePath: "/fidelizzato",
  output: "export",
  reactStrictMode: true,
};

export default nextConfig;
