import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import './index.css';

import NewMove from './pages/NewMove/index.js';
import Budget from './pages/Budget/index.js';
import Home from './pages/Home/index.js';
import Login from './pages/Login/index.js';
import Register from './pages/Register/index.js';
import UpdateMove from "./pages/UpdateMove/index.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/budget' element={<Budget />} />
          <Route path='/newMove' element={<NewMove />} />
          <Route path='/updateMove' element={<UpdateMove />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
