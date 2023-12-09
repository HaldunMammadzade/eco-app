import QrReaderPage from "../components/qrReader/QrReader";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MapComponent from "../pages/Map";
import Stepper from "../pages/Stepper";
import Welcome from "../pages/Welcome";
import About from "../pages/About";
import TreeGame from "../pages/TreeGame";
import Questions from "../pages/Questions";
import Leaderboard from "../pages/Leaderboard";
import Coins from "../pages/Coins";

const routes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "welcome",
    element: <Welcome />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "stepper",
    element: <Stepper />,
  },
  {
    path: "tree-game",
    element: <TreeGame />,
  },
  {
    path: "questions",
    element: <Questions />,
  },
  {
    path: "coins",
    element: <Coins />,
  },
  {
    path: "leaderboard",
    element: <Leaderboard />,
  },
  {
    path: "qr",
    element: <QrReaderPage />,
  },
  {
    path: "map",
    element: <MapComponent />,
  },
];

export default routes;
