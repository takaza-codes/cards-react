import "./App.css";
import heroes from "./heroes.json";
import HeroCard from "./HeroCard";

function App() {
    return (
      <div className="hero-list">
        {heroes.map(hero => (
          <HeroCard
            key={hero.id}
            name={hero.name}
            universe={hero.universe}
            alterego={hero.alterego}
            occupation={hero.occupation}
            friends={hero.friends}
            superpowers={hero.superpowers}
            url={hero.url}
          />
        ))}
      </div>
    );
  }

export default App;
