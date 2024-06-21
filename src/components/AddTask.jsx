import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { useContext } from "react";
import { TaskContext } from "@/context/TaskContextProvider";

function AddTaskForm() {
  const { handleSubmit, register, reset } = useForm();
  const { todos, setTodos } = useContext(TaskContext);
  function generateRandomId() {
    return Math.floor(Math.random() * 1000000) + 1;
  }
  function onSubmit(data) {
    const id = generateRandomId();
    const task = { ...data, id };
    setTodos(() => [...todos, task]);
    reset();
  }
  return (
    <Card className="dark mt-5   sm:w-[90%] w-[90%] ">
      <CardHeader>
        <CardTitle className=" text-center">Add Tasks</CardTitle>
        <CardDescription>
          Enter name and description of the task
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                className=" shrink-1"
                id="name"
                placeholder="Enter name of the task"
                {...register("name", { required: true })}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="Description">Description</Label>
              <Input
                id="Description"
                placeholder="Enter description of the task"
                {...register("description", { required: true })}
              />
            </div>
            <div className="flex justify-center">
              <Button className=" px-32">Add</Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export default AddTaskForm;
