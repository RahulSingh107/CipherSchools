import { useState } from "react";
import Task from "../components/Task";
import AddTask from "../components/AddTask";

const ToDoScreen = () => {
  const [taskList, setTaskList] = useState([]);
  let addNewTask = (task) => {
    setTaskList([...taskList, { ...task, createdDate: new Date() }]);
  };
  return (
    <>
      <div className="screen">
        <h1 className="ui heading center"> ToDo List</h1>
        <div>
          <button
            onClick={(e) => {
              setTaskList([
                ...taskList,
                {
                  Title: "This is a task",
                  Description: "THis is a task",
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
              {taskList.map((task, index) => (
                <Task task={task} key={index} />
              ))}
            </div>
          </section>
        </div>
        <AddTask onSubmit={addNewTask} />
      </div>
    </>
  );
};
export default ToDoScreen;
// import { useState } from "react";
// import Task from "../components/Task";
// import AddTask from "../components/AddTask";

// const ToDoScreen = () => {
//   const [taskList, setTaskList] = useState([]);
//   return (
//     <>
//       <div className="screen">
//         <h1 className="ui heading center"> ToDo List</h1>
//         <div>
//           <button
//             onClick={(e) => {
//               setTaskList([
//                 ...taskList,
//                 {
//                   Title: "Go to college",
//                   Description: "college going is good",
//                   createdDate: new Date(),
//                 },
//               ]);
//             }}
//             className="ui secondary button"
//           >
//             Add Task
//           </button>
//           <section>
//             <div className="ui cards">
//               {taskList.map((task) => (
//                 <Task task={task} />
//               ))}
//             </div>
//           </section>
//         </div>
//         <AddTask />
//       </div>
//     </>
//   );
// };
// export default ToDoScreen;
