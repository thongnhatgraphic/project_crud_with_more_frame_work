import './App.css';
import Menu from "./components/Menu/menu";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import routes from "./routes";


function App(props) {
  function showComponentCorresponding(routes) {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      })
    }
    return <Switch>{result}</Switch>
  }
  return (
    <Router>
      <div>
        <Menu />
        <div className="container">
          <div className="row">

          </div>
          {showComponentCorresponding(routes)}
        </div>
      </div >
    </Router>
  );
}

export default App;
