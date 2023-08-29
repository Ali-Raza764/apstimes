import { Header } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {CreatePost, Error, Home, Login, NewsDetails, PostDetails} from './pages'


const App = () => {
  return (
    <>
      <div className="w-full">
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/details/:id' element={<PostDetails />}/>
            <Route path='/postdetails/:id' element={<PostDetails />}/>
            <Route path='/newsdetails/:id' element={<NewsDetails />}/>
            <Route path='/create' element={<CreatePost />}/>
            <Route path='/*' element={<Error />}/>
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
