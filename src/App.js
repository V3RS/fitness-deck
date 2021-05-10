import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CardPage from "./components/CardPage";
import Splash from "./components/Splash";
import "./App.css";
import Deck from "./deck/deck";

function App() {
  const d = new Deck();
  d.shuffle();

  const [deck, setDeck] = useState(d);
  const [level, setLevel] = useState(1);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true}>
          <Splash level={level} setLevel={setLevel} />
        </Route>
        <Route path="/play" exact={true}>
          <CardPage
            deck={deck}
            setDeck={setDeck}
            level={level}
            setLevel={setLevel}
          />
        </Route>
        <Route path="/card" exact={true}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
