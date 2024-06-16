import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import TaskItem from "./TaskItem";

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

export function MainApp() {
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState([]);
  const { handleSubmit, reset, register } = useForm();
  const [showPending, setShowPending] = useState(true);

  useEffect(() => {
    // Load todos and completed tasks from localStorage when the component mounts
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    const storedCompleted = JSON.parse(localStorage.getItem("completed")) || [];
    setTodos(storedTodos);
    setCompleted(storedCompleted);
  }, []);

  useEffect(() => {
    // Save todos to localStorage whenever they change
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    // Save completed tasks to localStorage whenever they change
    localStorage.setItem("completed", JSON.stringify(completed));
  }, [completed]);

  function generateRandomId() {
    return Math.floor(Math.random() * 1000000) + 1;
  }
  function onSubmit(data) {
    const id = generateRandomId();
    const task = { ...data, id };
    setTodos(() => [...todos, task]);
    reset();
  }

  function onUpdate(data, id) {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, name: data.name, description: data.description }
          : todo
      )
    );
  }

  function onComplete(id) {
    setCompleted((completed) => [
      ...completed,
      ...todos.filter((todo) => todo.id === id),
    ]);

    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }
  return (
    <>
      <Card className="dark mt-5 w-[80%]">
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

      <Card className="dark mt-16 w-[80%] ">
        <CardHeader>
          <CardTitle className="text-center">
            {showPending ? "Pending Tasks" : "Completed Tasks"}
          </CardTitle>
        </CardHeader>

        <Tabs
          className="dark w-[100%] flex justify-center"
          defaultValue="Pending"
        >
          <TabsList className=" grid grid-cols-2 w-[50%]">
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
        {showPending
          ? todos.map((todo) => (
              <TaskItem
                todo={todo}
                key={todo.id}
                onComplete={onComplete}
                onUpdate={onUpdate}
              />
            ))
          : completed.map((completedTodo) => (
              <TaskItem todo={completedTodo} key={completedTodo.id} />
            ))}
        {}
      </Card>
    </>
  );
}
