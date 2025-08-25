import { NavPage } from "@types";

export const PAGES: NavPage[] = [
  { name: "Home", path: "/",  showInHeader: true, showInFooter: true },
  { name: "About", path: "/about", showInHeader: true, showInFooter: true },
  //hidden
  { name: "Products", path: "/products", showInHeader: false, showInFooter: false },
  { name: "SSR Example", path: "/ssr-example", showInHeader: false, showInFooter: false }, 
  { name: "Privacy", path: "/privacy", showInFooter: false },
];