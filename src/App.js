import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CardPage from "./components/CardPage";
import Splash from "./components/Splash";
import Deck from "./deck/deck";
import Completed from "./components/Completed";
import Instructions from "./components/Instructions";

import "./App.css";

function App() {
  const d = new Deck();
  d.shuffle();

  const [deck, setDeck] = useState(d);
  const [level, setLevel] = useState(1);
  const [isCore, setIsCore] = useState(false);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true}>
          <Splash setLevel={setLevel} setIsCore={setIsCore} />
        </Route>
        <Route path="/play" exact={true}>
          <CardPage
            deck={deck}
            setDeck={setDeck}
            level={level}
            setLevel={setLevel}
            isCore={isCore}
          />
        </Route>
        <Route path="/completed" exact={true}>
          <Completed setLevel={setLevel} setIsCore={setIsCore} />
        </Route>
        <Route path="/instructions" exact={true}>
          <Instructions setLevel={setLevel} setIsCore={setIsCore} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
