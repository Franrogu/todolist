import React from "react";
export default function TaskItem({ todo }) {
  const styles = () => {
    return {
      textDecoration: todo.completed ? "line-through" : "none",
      margin: "20px",
      border: "1px solid #fff",
      backgroundColor: "#CCF7E3",
    };
  };
  return <div style={styles()}>{todo.task}</div>;
}
