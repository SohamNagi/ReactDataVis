import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "./components/footer";
import Header from "./components/header";
import Impressions from "./components/impressions";
import Clicks from "./components/clicks";
import KPI from "./components/kpi";
import jsonData from "./mock_campaign_results.json";

interface Entry {
  date: string;
  campaign: string;
  impressions: number;
  clicks: number;
}

function App() {
  const d: Entry[] = jsonData;
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col items-center justify-between h-screen">
        <Header></Header>
        <div className="flex gap-2 flex-col">
          <div className="grid gap-2 grid-cols-2">
            <Impressions></Impressions>
            <Clicks></Clicks>
          </div>
          <KPI entries={d}></KPI>
        </div>
        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
