import React from "react";
import TaskItem from "../TaskItem";

export default function TaskList({ taskList }) {
  console.log(taskList);
  return (
    <div>
      {taskList.map((todo, index) => (
        <TaskItem key={`task Item ${index}`} todo={todo} />
      ))}
    </div>
  );
}
