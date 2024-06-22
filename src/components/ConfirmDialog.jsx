import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { updateTodo } from "@/todoSlice";
import { FilePenLine } from "lucide-react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

export function ConfirmDialog({ todo }) {
  const { handleSubmit, reset, register } = useForm({
    defaultValues: todo,
  });

  const dispatch = useDispatch();
  const closeDiaglogBox = useRef();

  function onSubmit(data) {
    dispatch(updateTodo(data));
    reset();
    closeDiaglogBox.current.click();
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className=" hover:bg-orange-600">
          <FilePenLine />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className=" text-center">Edit Task</DialogTitle>
        </DialogHeader>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name" className="">
                  Name
                </Label>
                <Input
                  id="name"
                  className=""
                  placeholder="Enter name of the task"
                  {...register("name", { required: true })}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="Description" className="">
                  Description
                </Label>
                <Input
                  className=""
                  id="Description"
                  placeholder="Enter description of the task"
                  {...register("description", { required: true })}
                />
              </div>
              <div className=" flex flex-col gap-y-2">
                <Button className=" bg-green-600 hover:bg-green-500">
                  Save
                </Button>
                <DialogClose asChild>
                  <Button
                    type="button"
                    className="border-0 bg-red-600 hover:bg-red-500"
                    ref={closeDiaglogBox}
                  >
                    Close
                  </Button>
                </DialogClose>
              </div>
            </div>
            <input type="hidden" name="id" value={todo.id} />
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
