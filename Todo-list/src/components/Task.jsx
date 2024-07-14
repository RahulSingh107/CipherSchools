import { useContext, useState } from "react";
import { formatDate } from "../assets/utils/DateUtil";
import TaskContext from "./Context/TaskContext";
const Task = ({ task: { title, description, createdDate, taskId } }) => {
  const { deleteTask } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div className="card">
      <div className="content">
        <div className="header">{title}</div>
        <div className="meta">{formatDate(createdDate)}</div>
        <div className="description">{description}</div>
      </div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic blue button">Edit</div>
          <div
            className="ui basic red button"
            onClick={() => deleteTask(taskId)}
          >
            Delete
          </div>
        </div>
      </div>
    </div>
  );
};
export default Task;
