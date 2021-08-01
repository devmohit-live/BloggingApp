import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import View from "./View";
import Create from "./Create";
import { useState } from "react";
function App() {
  let [user, setUser] = useState(null);

  return (
    <>
      <Router>
        <Switch>
          <Route path="/new">
            <Create handleUser={setUser} user={user} />
          </Route>
          <Route path="/view">
            <View user={user} />
          </Route>
          <Route path="/">
            <Login user={user} userHandler={setUser} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
