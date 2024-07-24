import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "./components/footer";
import Header from "./components/header";
import Impressions from "./components/impressions";
import Clicks from "./components/clicks";
import KPI from "./components/kpi";
import cdata from "./mock_campaign_results.json";


function App() {
  console.log(cdata)
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col items-center justify-between h-screen">
        <Header></Header>
        <div>
          <Impressions></Impressions>
          <KPI></KPI>
          <Clicks></Clicks>
        </div>
        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
