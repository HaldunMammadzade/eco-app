import { useRoutes } from "react-router-dom";
import "./style/main.css";
import routes from "./route/route";
function App() {
  const routing = useRoutes(routes);

  return <div className="App">{routing}</div>;
}

export default App;
