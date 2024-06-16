import { CircleX, ClipboardCheck } from "lucide-react";
import { Button } from "./ui/button";
import { CardContent, CardDescription, CardTitle } from "./ui/card";
import { Separator } from "@radix-ui/react-select";
import { DialogCloseButton } from "./Dialog";

function TaskItem({ todo, onComplete, onUpdate }) {
  return (
    <>
      <CardContent className=" flex justify-between space-x-5">
        <div>
          <CardTitle className=" text-xl">{todo.name}</CardTitle>
          <CardDescription className=" mt-1">
            {todo.description}
          </CardDescription>
        </div>
        <div>
          {onComplete && (
            <>
              <Button
                variant="outline"
                className=" hover:bg-green-600"
                onClick={() => onComplete(todo.id)}
              >
                <ClipboardCheck />
              </Button>
              <DialogCloseButton todo={todo} onUpdate={onUpdate} />
            </>
          )}

          <Button variant="outline" className=" hover:bg-red-600">
            <CircleX />
          </Button>
        </div>
      </CardContent>
      <Separator className=" my-5 border-2" />
    </>
  );
}

export default TaskItem;
