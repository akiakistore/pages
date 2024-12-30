import "./App.css";
import Home from "./pages/Home";
import { useRoutes } from "react-router-dom";
import Product from "./pages/Product";

const routesArray = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products/*",
    element: <Product />,
  },
];
function App() {
  let routesElement = useRoutes(routesArray);

  return <>{routesElement}</>;
}
export default App;
