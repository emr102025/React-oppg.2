import "./App.css";
import CatFacts from "./components/CatFacts";
import CookieClicker from "./components/CookieClicker";
import Users from "./components/Users";
import { mockData } from "./data/mockData";

function App() {
  return (
    <>
      <div className="flexbox">
        <CookieClicker />
        <CatFacts />
        <Users mockData={mockData} />
      </div>
    </>
  );
}

export default App;
