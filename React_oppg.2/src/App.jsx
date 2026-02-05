import "./App.css";
import CatFacts from "./components/CatFacts";
import CookieClicker from "./components/CookieClicker";

function App() {
  return (
    <>
      <div className="flexbox">
        <CookieClicker />
        <CatFacts />
      </div>
    </>
  );
}

export default App;
