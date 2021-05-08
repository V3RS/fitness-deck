import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from "./components/Main";
import Splash from "./components/Splash";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true}>
          <Splash />
        </Route>
        <Route path="/fit" exact={true}>
          <Main />
        </Route>
        <Route path="/card" exact={true}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
