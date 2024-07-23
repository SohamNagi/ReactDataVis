import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Graphs = () => {
  return (
    <>
      <div className="p-2 mb-auto">
        <Tabs defaultValue="Compare" className="">
          <TabsList>
            <TabsTrigger value="CampaignA">Campaign A</TabsTrigger>
            <TabsTrigger value="Compare">Compare Campaigns</TabsTrigger>
            <TabsTrigger value="CampaignB">Campaign B</TabsTrigger>
          </TabsList>
          <TabsContent value="CampaignA" className=" text-center">
            Campaign A Data
          </TabsContent>
          <TabsContent value="CampaignB" className=" text-center">
            Campaign B Data
          </TabsContent>
          <TabsContent value="Compare" className=" text-center">
            Campaign Comparision
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Graphs;
