import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface props {
  tabsList: string[];
}

export function TabbedCard() {
  const DepositCard = (
    <div className="mx-auto grid w-full grid-cols-1 rounded-lg border bg-secondary p-6 text-center text-primary shadow xl:p-8">
      <h3 className="mb-4 text-3xl font-semibold">Deposit</h3>
      <p className="sm:text-lg">
        This is non-refundable and is required to hold your puppy. The remaining
        balance will be paid at time of pick up.
      </p>
      <div className="my-8 flex items-baseline justify-center">
        <span className="mr-2 mt-auto text-5xl font-extrabold">$200</span>
      </div>
    </div>
  );

  return (
    <Tabs defaultValue="full">
      <TabsList id="tabs-list" className="grid grid-cols-2">
        <TabsTrigger className="text-xs" value="full">
          Full registration
        </TabsTrigger>
        <TabsTrigger className="text-xs" value="limited">
          Limited registration
        </TabsTrigger>
      </TabsList>
      <TabsContent className="grid grid-flow-row sm:grid-cols-3 gap-4" value="full">
        {DepositCard}
        <div className="mx-auto grid w-full grid-cols-1 rounded-lg border bg-secondary p-6 text-center text-primary shadow xl:p-8">
          <h3 className="mb-4 text-3xl font-semibold">Male</h3>
          <p className="sm:text-lg">Due at pickup:</p>
          <div className="my-8 mt-auto flex items-baseline justify-center">
            <span className="mr-2 text-5xl font-extrabold">$1000</span>
          </div>
        </div>

        <div className="mx-auto grid w-full max-w-lg grid-cols-1 rounded-lg border bg-secondary p-6 text-center text-primary shadow xl:p-8">
          <h3 className="mb-4 text-3xl font-semibold">Female</h3>
          <p className="sm:text-lg">Due at pickup:</p>
          <div className="my-8 mt-auto flex items-baseline justify-center">
            <span className="mr-2 text-5xl font-extrabold">$1200</span>
          </div>
        </div>
      </TabsContent>
      <TabsContent className="mt-0 grid grid-flow-row sm:grid-cols-3 gap-4" value="limited">
        {DepositCard}
        <div className="mx-auto grid w-full max-w-lg grid-cols-1 rounded-lg border bg-secondary p-6 text-center text-primary shadow xl:p-8">
          <h3 className="mb-4 text-3xl font-semibold">Male</h3>
          <p className="sm:text-lg">Due at pickup:</p>
          <div className="my-8 mt-auto flex items-baseline justify-center">
            <span className="mr-2 text-5xl font-extrabold">$800</span>
          </div>
        </div>

        <div className="mx-auto grid w-full max-w-lg grid-cols-1 rounded-lg border bg-secondary p-6 text-center text-primary shadow xl:p-8">
          <h3 className="mb-4 text-3xl font-semibold">Female</h3>
          <p className="sm:text-lg">Due at pickup:</p>
          <div className="my-8 mt-auto flex items-baseline justify-center">
            <span className="mr-2 text-5xl font-extrabold">$1000</span>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
