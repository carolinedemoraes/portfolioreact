import MainContent from "./components/MainContent";
import Sidebar from "./components/Siderbar";
import "./styles/components/app.sass";

function App() {
  return (
    <div id="portfolio">
      <h1>Caroline Moraes</h1>
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
