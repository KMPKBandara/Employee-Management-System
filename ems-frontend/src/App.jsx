import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import EmployeeComponent from "./components/EmployeeComponent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app-wrapper d-flex flex-column min-vh-100">
      <BrowserRouter>
        <Header />
        <div className="flex-grow-1" style={{ paddingTop: "70px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employees" element={<ListEmployeeComponent />} />
            <Route path="/add-employee" element={<EmployeeComponent />} />
            <Route path="/edit-employee/:id" element={<EmployeeComponent />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
