import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "./components/footer";
import Header from "./components/header";
import Graphs from "./components/graphs";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col items-center justify-between h-screen">
        <Header></Header>
        <Graphs></Graphs>
        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
