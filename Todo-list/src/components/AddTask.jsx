import { useContext, useState } from "react";
import TaskContext from "./Context/TaskContext";
import { useNavigate } from "react-router-dom";
const AddTask = () => {
  const { addNewTask } = useContext(TaskContext);
  const navigate = useNavigate();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  let handleInputChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  //creating a submission function that will add new task as well as navigate from one component to another
  let onFormSubmit = (e) => {
    e.preventDefault();
    console.log(task);
    addNewTask(task);
    setTask([]);
    navigate("/");
  };
  return (
    <section className="screen">
      <h3 className="ui heading center">Add new Task</h3>
      <div className="ui form">
        <form onSubmit={onFormSubmit}>
          <div className="field">
            <label>Title</label>
            <input
              type="text"
              placeholder="Task Title"
              name="title"
              onChange={handleInputChange}
              value={task.title}
              required
            />
          </div>
          <div className="field">
            <label>Description</label>
            <textarea
              rows="2"
              placeholder="Task Description"
              name="description"
              onChange={handleInputChange}
              value={task.description}
              required
            />
          </div>
          <button type="submit" className="ui primary button">
            Save
          </button>
        </form>
      </div>
    </section>
  );
};
export default AddTask;
