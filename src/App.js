import './App.css';
import Menu from "./components/menu/Menu";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RegisterMenu from "./components/auth/register/RegisterMenu";
import LoginMenu from "./components/auth/login/LoginMenu";

function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu/>}/>
          <Route path="/register" element={<RegisterMenu/>}/>
          <Route path="/login" element={<LoginMenu/>}/>
        </Routes>
      </BrowserRouter>
    );
}

export default App;
