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
import { TaskContext } from "@/context/TaskContextProvider";
import { FilePenLine } from "lucide-react";
import { useContext, useRef } from "react";
import { useForm } from "react-hook-form";

export function DialogCloseButton({ todo }) {
  const { onUpdate } = useContext(TaskContext);
  const { handleSubmit, reset, register } = useForm({
    defaultValues: todo,
  });

  const closeDiaglogBox = useRef();

  function onSubmit(data) {
    onUpdate(data, todo.id);
    reset();
    closeDiaglogBox.current.click();
  }
  return (
    <Dialog className="dark text-stone-50 ">
      <DialogTrigger asChild>
        <Button variant="outline" className=" hover:bg-orange-600">
          <FilePenLine />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md dark">
        <DialogHeader>
          <DialogTitle className=" text-stone-50 text-center">
            Edit Task
          </DialogTitle>
        </DialogHeader>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name" className=" text-stone-50">
                  Name
                </Label>
                <Input
                  id="name"
                  className=" text-stone-50"
                  placeholder="Enter name of the task"
                  {...register("name", { required: true })}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="Description" className=" text-stone-50">
                  Description
                </Label>
                <Input
                  className=" text-stone-50"
                  id="Description"
                  placeholder="Enter description of the task"
                  {...register("description", { required: true })}
                />
              </div>
              <div className=" flex flex-col gap-y-2">
                <Button className=" text-stone-50 bg-green-800 hover:bg-green-500">
                  Save
                </Button>
                <DialogClose asChild>
                  <Button
                    type="button"
                    className="text-stone-50 border-0 bg-red-800 hover:bg-red-500"
                    ref={closeDiaglogBox}
                  >
                    Close
                  </Button>
                </DialogClose>
              </div>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
