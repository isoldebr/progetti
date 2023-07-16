import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {} from "bootstrap/dist/css/bootstrap.css";

//Components
import Navbar from "./components/Navbar";

//Pages
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" Component={HomePage}/>
        <Route path="/detail/:id" Component={DetailPage}/>
      </Routes>
    </Router> 
  );
}

export default App;
