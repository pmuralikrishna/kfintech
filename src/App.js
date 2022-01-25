import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage/WelcomePage';

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

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
