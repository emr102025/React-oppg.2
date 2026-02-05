import "./App.css";
import CatFacts from "./components/CatFacts";
import CookieClicker from "./components/CookieClicker";
import Users from "./components/Users";

function App() {
  return (
    <>
      <div className="flexbox">
        <CookieClicker />
        <CatFacts />
        <Users />
      </div>
    </>
  );
}

export default App;
