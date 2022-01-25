import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage/WelcomePage';
import Login from './pages/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route
            exact={true}
            path="/"
          >
            <WelcomePage />
          </Route>
          <Route
            exact={true}
            path="/login"
          >
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
