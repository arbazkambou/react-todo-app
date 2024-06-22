import { CircleX, ClipboardCheck } from "lucide-react";
import { Button } from "./ui/button";
import { CardContent, CardDescription, CardTitle } from "./ui/card";
import { Separator } from "@radix-ui/react-select";
import { ConfirmDialog } from "./ConfirmDialog";
import { useDispatch } from "react-redux";
import { completeTodo, removeTodo } from "@/features/todoSlice";

function TaskItem({ todo, isCompleted = false }) {
  const dispatch = useDispatch();

  return (
    <>
      <CardContent className=" flex justify-between space-x-5">
        <div>
          <CardTitle className=" text-xl">{todo.name}</CardTitle>
          <CardDescription className=" mt-1">
            {todo.description}
          </CardDescription>
        </div>
        <div className="flex sm:flex-col md:flex-row flex-col">
          {isCompleted ? (
            <Button
              variant="outline"
              className=" hover:bg-red-600"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              <CircleX />
            </Button>
          ) : (
            <>
              <Button
                variant="outline"
                className=" hover:bg-green-600"
                onClick={() => dispatch(completeTodo(todo.id))}
              >
                <ClipboardCheck />
              </Button>
              <ConfirmDialog todo={todo} />
              <Button
                variant="outline"
                className=" hover:bg-red-600"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                <CircleX />
              </Button>
            </>
          )}
        </div>
      </CardContent>
      <Separator className=" my-5 border-2" />
    </>
  );
}

export default TaskItem;
