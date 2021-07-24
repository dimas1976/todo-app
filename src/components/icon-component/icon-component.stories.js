import "./icon-component.css";
import burgerIcon from "./burger-icon-component.html";
import notifyIcon from "./notify-icon-component.html";

export default {
  title: "Components/Icons",
  parameters: { layout: "fullscreen" },
};

export const burger = () => burgerIcon;
export const notify = () => notifyIcon;
