import NavBar from './components/NavBar';
import Home from "./views/Home/Home";
import Auth from "./views/Authentication/Auth";
import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          {/* Private Routes */}
          <Route path="/" element={<ProtectedRoute />}>
            <Route path='/' element = {<Outlet />}>
              <Route path='/' element={<Navigate  replace to="home" />} />
              <Route path='/home' element={<Home />}/>
            </Route>
          </Route>

          {/* Public Route */}
          <Route path='/auth' element= { <Auth /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
