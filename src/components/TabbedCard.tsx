import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@radix-ui/react-label";

interface props {
  tabsList: string[];
}

export function TabbedCard() {
  return (
    <Tabs defaultValue="full">
      <TabsList id="tabs-list" className="grid w-fit grid-cols-2">
        <TabsTrigger className="text-xs" value="full">
          Full registration
        </TabsTrigger>
        <TabsTrigger className="text-xs" value="limited">
          Limited registration
        </TabsTrigger>
      </TabsList>
      <TabsContent value="full">
        <div className="grid grid-cols-2 gap-4">
          <div className="mx-auto flex w-full flex-col rounded-lg border bg-secondary p-6 text-center text-primary shadow xl:p-8">
            <h3 className="mb-4 text-3xl font-semibold">Male</h3>
            <p className="sm:text-lg">Due at pickup</p>
            <div className="my-8 flex items-baseline justify-center">
              <span className="mr-2 text-5xl font-extrabold">$1000</span>
            </div>
          </div>

          <div className="mx-auto flex w-full max-w-lg flex-col rounded-lg border bg-secondary p-6 text-center text-primary shadow xl:p-8">
            <h3 className="mb-4 text-3xl font-semibold">Female</h3>
            <p className="sm:text-lg">Due at pickup</p>
            <div className="my-8 flex items-baseline justify-center">
              <span className="mr-2 text-5xl font-extrabold">$1200</span>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="limited">
        <div className="flex flex-row gap-4">
          <div className="mx-auto flex w-full max-w-lg flex-col rounded-lg border bg-secondary p-6 text-center text-primary shadow xl:p-8">
            <h3 className="mb-4 text-3xl font-semibold">Male</h3>
            <p className="sm:text-lg">Due at pickup</p>
            <div className="my-8 flex items-baseline justify-center">
              <span className="mr-2 text-5xl font-extrabold">$800</span>
            </div>
          </div>

          <div className="mx-auto flex w-full max-w-lg flex-col rounded-lg border bg-secondary p-6 text-center text-primary shadow xl:p-8">
            <h3 className="mb-4 text-3xl font-semibold">Female</h3>
            <p className="sm:text-lg">Due at pickup</p>
            <div className="my-8 flex items-baseline justify-center">
              <span className="mr-2 text-5xl font-extrabold">$1000</span>
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
