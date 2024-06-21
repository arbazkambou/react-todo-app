import { useContext } from "react";
import AddTaskForm from "./components/AddTask";

import MenuTabs from "./components/MenuTabs";

import Tasks from "./components/Tasks";
import { Card, CardHeader, CardTitle } from "./components/ui/card";
import { TaskContext } from "./context/TaskContextProvider";

function App() {
  const { showPending } = useContext(TaskContext);
  return (
    <div className=" h-screen w-screen flex flex-col items-center">
      <AddTaskForm />
      <Card className="dark mt-16 sm:w-[90%] w-[90%] ">
        <CardHeader>
          <CardTitle className="text-center">
            {showPending ? "Pending Tasks" : "Completed Tasks"}
          </CardTitle>
        </CardHeader>
        <MenuTabs />
        <Tasks />
      </Card>
    </div>
  );
}

export default App;
