import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Navebar from './Component/Navbar/Navebar';



function App() {
  return (
    <div className="App">
      <Navebar></Navebar>
      <Routes>
        <Route path='/home' element={<Home></Home>}/>
      </Routes>
      
    </div>
  );
}

export default App;
