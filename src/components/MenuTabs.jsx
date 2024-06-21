import { useContext } from "react";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { TaskContext } from "@/context/TaskContextProvider";

function MenuTabs() {
  const { showPending, setShowPending } = useContext(TaskContext);
  return (
    <Tabs className="dark w-[100%] flex justify-center" defaultValue="Pending">
      <TabsList className=" grid md:grid-cols-2 sm:w-[30%] sm:grid-cols-1 mb-10">
        <TabsTrigger
          value="Pending"
          onClick={() =>
            setShowPending(() => (showPending ? showPending : !showPending))
          }
        >
          Pending{" "}
        </TabsTrigger>
        <TabsTrigger
          value="Completed "
          onClick={() =>
            setShowPending(() => (showPending ? !showPending : showPending))
          }
        >
          Completed{" "}
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

export default MenuTabs;
