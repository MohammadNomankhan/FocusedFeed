import ReactDOM from "react-dom/client";
import Home from "./components/Home";

const App = () => {
  return <Home />;
};

const root = document.getElementById("root");
const container = ReactDOM.createRoot(root);
container.render(<App />);
