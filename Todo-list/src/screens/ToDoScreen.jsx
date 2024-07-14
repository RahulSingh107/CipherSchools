import { useContext } from "react";
import Task from "../components/Task";
import AddTask from "../components/AddTask";
import TaskContext from "../components/Context/TaskContext";
import { useNavigate } from "react-router-dom";

const ToDoScreen = () => {
  const { taskList } = useContext(TaskContext);
  const navigate = useNavigate();
  return (
    <>
      <div className="screen">
        <h1 className="ui heading center"> ToDo List</h1>
        <div>
          <button
            onClick={(e) => {
              navigate("/add-task");
            }}
            className="ui secondary button"
          >
            Add Task
          </button>
        </div>
        <section>
          <div className="ui cards">
            {taskList.map((task) => (
              <Task task={task} key={task.taskId} />
            ))}
          </div>
        </section>
        {/* <AddTask onSubmit={addNewTask} /> */}
      </div>
    </>
  );
};
export default ToDoScreen;
