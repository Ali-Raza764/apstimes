import { Header } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home, Login} from './pages'


const App = () => {
  return (
    <>
      <div className="w-full">
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
