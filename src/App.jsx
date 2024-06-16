import { MainApp } from "./components/MainApp";

function App() {
  return (
    <div className=" h-screen w-screen flex flex-col items-center">
      <MainApp />
    </div>
    // <form>
    //   <div className="flex flex-col h-screen">
    //     <div className=" flex  gap-3">
    //       <div>
    //         <Label>Title</Label>
    //         <Input placeholder="Enter title of task" className=" px-20" />
    //       </div>
    //       <div>
    //         <Label>Description</Label>
    //         <Input
    //           placeholder="Enter description of the task"
    //           className=" px-20"
    //         />
    //       </div>
    //     </div>
    //     <div>
    //       <Button>Add</Button>
    //     </div>
    //   </div>
    // </form>
  );
}

export default App;
