import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import Home from './pages/Home/index.js';
import Login from "./pages/Login/index.js";
import Register from "./pages/Register/index.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
