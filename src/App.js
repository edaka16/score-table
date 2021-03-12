import logo from "./logo.svg";
import "./css/App.css";
import Header from "./components/Header";
import { useState } from "react";
import NoPlayerList from "./components/NoPlayerList";
import PlayerList from "./components/PlayerList";

const App = () => {
  const [nr_of_players, setNr_of_players] = useState([]);
  const [count, setCount] = useState(0);

  const addPlayer = () => {
    const newPlayer = {
      id: count,
      name: `Player: ${count}`,
    };
    setNr_of_players([...nr_of_players, newPlayer]);
    setCount(count + 1);
  };
  const deleteAll = () => {
    setNr_of_players([]);
  };

  return (
    <div className="App">
      <Header />
      {nr_of_players && nr_of_players.length > 0 ? (
        <PlayerList
          nr_of_players={nr_of_players}
          addPlayer={addPlayer}
          deleteAll={deleteAll}
          setNr_of_players={setNr_of_players}
        />
      ) : (
        <NoPlayerList addPlayer={addPlayer} />
      )}
    </div>
  );
};

export default App;
