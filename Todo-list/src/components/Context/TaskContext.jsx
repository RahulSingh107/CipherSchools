import { createContext, useState } from "react";
import { v4 as randomUUID } from "uuid";
// TaskContext is the object of context
const TASK_EDITABLE_FIELD_LIST = ["title", "description"];
const TaskContext = createContext();
//provider is that component that provide the context prop to all the other components
const TaskProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([]);
  const addNewTask = (task) => {
    setTaskList([
      ...taskList,
      { ...task, createdDate: new Date(), taskId: randomUUID() },
    ]);
  };
  const deleteTask = (taskId) => {
    setTaskList(taskList.filter((task) => task.taskId !== taskId));
  };
  const editTask = (task) => {
    let tempTaskList = [...taskList];
    for (let t of taskList) {
      if (t.taskId === task.taskId) {
        TASK_EDITABLE_FIELD_LIST.forEach((field) => (t[field] = task[field]));
      }
    }
    setTaskList(taskList);
  };
  return (
    <TaskContext.Provider
      value={{ taskList, addNewTask, deleteTask, editTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

/* children are that jsx that are written between the start and ending of a context */

export { TaskProvider };
export default TaskContext;
