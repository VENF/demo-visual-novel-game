import { Switch, Route } from "react-router-dom";
import { routes } from "./routes/routes";
function App() {
  return (
    <div className="App">
      <Switch>
        {routes.map(({ path, key, page}) => (
          <Route exact key={key} path={path} component={page} />
        ))}
      </Switch>
    </div>
  );
}

export default App;
