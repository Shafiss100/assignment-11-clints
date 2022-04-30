
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Navebar from './Component/Navbar/Navebar';
import Login from './Component/Login/Login';
import Signup from "./Component/Signup/Signup";
import Inventory from "./Component/Inventory/Inventoru";



function App() {
  return (
    <div>
      <Navebar></Navebar>
      <Routes>
        <Route path='/home' element={<Home></Home>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/inventory' element={<Inventory/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
