import "./task-list-component.css";
import taskList from "./task-list-component.html";

export default {
  title: "Components/Task List",
  parameters: {
    layout: "fullscreen",
  },
};

export const tasksList = () => taskList;
