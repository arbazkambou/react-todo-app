import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TabsDemo() {
  return (
    <Tabs className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account" data-state="active">
          Account
        </TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
