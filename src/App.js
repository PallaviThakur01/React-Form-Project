import "./App.css";
import {  Route,Routes } from "react-router-dom";


import Login from  './pages/Login';
import Register from "./pages/Register";
 import Forget from "./pages/Forget";

function App() {
  return (
    // <Forget />
    // <Register />
    //  <Login />

    <Routes>
      <Route exact path="/" element={<Login/>} />
    <Route path="/Register" element={<Register/>} />
    <Route path="/Forget" element={<Forget/>}  />
    
    
    </Routes>

  );
}

export default App;
