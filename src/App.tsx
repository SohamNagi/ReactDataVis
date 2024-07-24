import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "./components/footer";
import Header from "./components/header";
import Impressions from "./components/impressions";
import Clicks from "./components/clicks";
import KPI from "./components/kpi";
import cdata from "./mock_campaign_results.json";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col items-center justify-between h-screen">
        <Header></Header>
        <div className="flex gap-2 flex-col">
          <div className="grid gap-2 grid-cols-2">
            <Impressions></Impressions>
            <Clicks></Clicks>
          </div>
          <KPI></KPI>
        </div>
        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
