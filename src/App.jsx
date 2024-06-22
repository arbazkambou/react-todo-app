import { useState } from "react";
import AddTaskForm from "./components/AddTask";
import MenuTabs from "./components/MenuTabs";
import Tasks from "./components/Tasks";
import { Card, CardHeader, CardTitle } from "./components/ui/card";
import { ChooseThemeMenu } from "./components/ChooseThemeMenu";

function App() {
  const [showPending, setShowPending] = useState(true);

  return (
    <div className=" h-screen w-screen flex flex-col items-center">
      <div className="w-[90%] flex justify-end gap-x-2">
        <ChooseThemeMenu />
      </div>

      <AddTaskForm />
      <Card className=" mt-16 sm:w-[90%] w-[90%] shadow-md">
        <CardHeader>
          <CardTitle className="text-center">
            {showPending ? "Pending Tasks" : "Completed Tasks"}
          </CardTitle>
        </CardHeader>
        <MenuTabs showPending={showPending} setShowPending={setShowPending} />
        <Tasks showPending={showPending} />
      </Card>
    </div>
  );
}

export default App;
