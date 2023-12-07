import QrReaderPage from "../components/qrReader/QrReader";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MapComponent from "../pages/Map";
import Stepper from "../pages/Stepper";
import Welcome from "../pages/Welcome";
import About from "../pages/about/About";

const routes = [
  {
    index: true,
    element: <Home />,
  },
  {
    index: "welcome",
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
    path: "qr",
    element: <QrReaderPage />,
  },
  {
    path: "map",
    element: <MapComponent />,
  },
];

export default routes;
