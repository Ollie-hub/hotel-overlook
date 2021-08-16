import './App.css';
import { Navigation } from './components/navigation/Navigation';
import { LoginPage } from './pages/loginpage/LoginPage';
import { BrowserRouter as Browser, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <Browser>
      <Navigation />
      <Switch>
        <Route exact path="/forside">

        </Route>
        <Route exact path="/events">

        </Route>
        <Route exact path="/line-up">

        </Route>
        <Route exact path="/program">

        </Route>
        <Route exact path="/camps">

        </Route>
        <Route exact path="/billetter">

        </Route>
        <Route exact path="/praktisk-info">

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
