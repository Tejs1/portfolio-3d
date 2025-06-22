import { BrowserRouter } from "react-router-dom";
import World from "./components/World";

const App = () => {
  return (
    <BrowserRouter>
      <World />
    </BrowserRouter>
  );
};

export default App;
