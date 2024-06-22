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
import { useDispatch } from "react-redux";
import { addTodo } from "@/todoSlice";

function AddTaskForm() {
  const { handleSubmit, register, reset } = useForm();
  const dispatch = useDispatch();

  function onSubmit(data) {
    const { name, description } = data;
    dispatch(addTodo({ name, description }));
    reset();
  }

  return (
    <Card className=" mt-5 shadow-md  sm:w-[90%] w-[90%] ">
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
