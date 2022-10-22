import "./App.css";
import NavigationBar from "./components/Navbar";
import AppRoutes from "./Routes";
import { HashRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      {/* wrapping the app inside a Router */}
      <Router>
        <NavigationBar />
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
