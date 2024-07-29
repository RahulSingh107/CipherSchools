import { useContext } from "react";
import AddTask from "./components/AddTask";
import ToDoScreen from "./screens/ToDoScreen";
import LoginScreen from "./components/LoginScreen";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TaskProvider } from "./components/Context/TaskContext";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginScreen />,
    },
    {
      path: "/dashboard",
      element: <ToDoScreen />,
    },
    {
      path: "/add-task",
      element: <AddTask />,
    },
  ]);
  return (
    <TaskProvider>
      <RouterProvider router={router} />;
    </TaskProvider>
  );
};
export default App;
