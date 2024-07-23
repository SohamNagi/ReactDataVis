import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "./components/footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "./components/header";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col items-center justify-between h-screen">
        <Header></Header>
        <div className=" p-2 mb-auto">
          <Tabs defaultValue="account" className="">
            <TabsList>
              <TabsTrigger value="CampaignA">Campaign A</TabsTrigger>
              <TabsTrigger value="CampaignB">Campaign B</TabsTrigger>
              <TabsTrigger value="Compare">Compare Campaigns</TabsTrigger>
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
        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
