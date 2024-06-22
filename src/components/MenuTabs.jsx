import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

function MenuTabs({ showPending, setShowPending }) {
  return (
    <Tabs className=" w-[100%] flex justify-center" defaultValue="Pending">
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
