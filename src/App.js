
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Navebar from './Component/Navbar/Navebar';
import Login from './Component/Login/Login';
import Signup from "./Component/Signup/Signup";
import Inventory from "./Component/Inventory/Inventoru";
import AddInventory from "./Component/AddInventory/AddInventory";
import Blog from "./Component/Blog/Blog";
import NotFound from "./Component/NotFound/NotFound";
import RequireAuth from "./Component/RequireAuth/RequireAuth";
import Update from "./Component/Update/Update";





function App() {
  return (
    <div>
      <Navebar></Navebar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route
          path="/addinvent"
          element={
            <RequireAuth>
              <AddInventory />
            </RequireAuth>
          }
        />
        <Route path="/blog" element={<Blog></Blog>} />
        <Route path="/update/:id" element={<Update/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
