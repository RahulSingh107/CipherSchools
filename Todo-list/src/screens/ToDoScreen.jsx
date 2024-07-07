import { useState } from "react";
import Task from "../components/Task";

const ToDoScreen = () => {
  const [taskList, setTaskList] = useState([]);
  return (
    <div className="screen">
      <h1 className="ui heading center"> ToDo List</h1>
      <div>
        <button
          onClick={(e) => {
            setTaskList([
              ...taskList,
              {
                Title: "Go to college",
                Description: "college going is good",
                createdDate: new Date(),
              },
            ]);
          }}
          className="ui secondary button"
        >
          Add Task
        </button>
        <section>
          <div className="ui cards">
            {taskList.map((task) => (
              <Task task={task} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
export default ToDoScreen;
