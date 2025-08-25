// pages/about.tsx
import { AboutView, withPageShell } from "@components";

export default withPageShell(
  AboutView,
  {
    mainClassName: "bg-gray-800", // example
  },
  {
    seo: {
      title: "About - Sandbox Portfolio",
      description: "A demo by Sandbox.",
      url: "https://addurl.xyz/about",
    },
  }
);
