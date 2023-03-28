import "./App.css";
import Header from "./components/Header";
import logo from "./assets/dp_logo.jpg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WalletView from "./components/WalletView";

function App() {
  const Username = "SAGAR SEN";
  return (
    <Router>
      <div className="App">
        <Header logo={logo} Username={Username} />
        <Routes>
          <Route path="/" element={<WalletView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
