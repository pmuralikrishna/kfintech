import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage/WelcomePage';
import Login from './pages/Login/Login';
import Register from './pages/Register';
import Users from './pages/Users';
import { Provider } from "react-redux";
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
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
          <Route
            exact={true}
            path="/register"
          >
            <Register />
          </Route>
          <Route
            exact={true}
            path="/users"
          >
            <Users />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
