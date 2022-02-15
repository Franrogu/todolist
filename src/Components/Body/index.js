import React, { useState } from "react";
import Formulario from "../Form";
import TaskList from "../TaskList";
import data from "../data.json";

export default function Body() {
  const [taskList, setTaskList] = useState(data);
  const newTask = (task) => {
    setTaskList(task, ...taskList);
  };
  return (
    <>
      <Formulario />
      <TaskList taskList={taskList} />
    </>
  );
}
