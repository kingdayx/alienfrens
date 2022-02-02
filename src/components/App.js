import Cards from "./Cards";
import Header from "./Header";
import NavBar from "./NavBar";
import TopBar from "./TopBar";
import Who from "./Who";

function App() {
  return (
    <div className="App">
      <TopBar />
      <NavBar />
      <Header />
      <Who />
      <Cards />
    </div>
  );
}

export default App;
