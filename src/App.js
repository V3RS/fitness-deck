import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import Splash from "./components/Splash";
import "./App.css";
import Deck from "./deck/deck";

function App() {
  const d = new Deck();
  d.shuffle();

  const [deck, setDeck] = useState(d);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true}>
          <Splash />
        </Route>
        <Route path="/fit" exact={true}>
          <Main deck={deck} setDeck={setDeck} />
        </Route>
        <Route path="/card" exact={true}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
