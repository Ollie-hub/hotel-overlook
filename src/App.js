import './App.css';
import { Navigation } from './components/Navigation/Navigation';
import { LoginPage } from './pages/LoginPage/LoginPage'
import { BrowserRouter as Browser, Switch, Route, Redirect } from 'react-router-dom';
import { FrontPage } from './pages/FrontPage/FrontPage';

function App() {
  return (
    <Browser>
      <Navigation />
      <Switch>
        <Route exact path="/forside">
          <FrontPage />
        </Route>
        <Route exact path="/hoteller">

        </Route>
        <Route exact path="/vaerelser">

        </Route>
        <Route exact path="/resevation">

        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route path="/">
          <Redirect to="/forside"></Redirect>
        </Route>
      </Switch>

    </Browser>
  );
}

export default App;
