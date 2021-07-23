import "./nav-item-component.css";
import activeNavCpt from "./nav-item-active-component.html";
import navCpt from "./nav-item-component.html";

export default {
  title: "Components/Navs",
  parameters: { layout: "fullscreen" },
};

export const activeNav = () => activeNavCpt;
export const nav = () => navCpt;
