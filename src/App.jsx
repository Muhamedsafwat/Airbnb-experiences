import NavBar from "./components/Nav";
import Hero from "./components/HeroSection";
import Card from "./components/Card";

import data from "../src/data";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <div className="container">
        <section className="cards-list">
          {data.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
