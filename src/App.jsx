import { Header, Footer } from "./components";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import {
  CreatePost,
  Error,
  Home,
  Login,
  NewsDetails,
  PostDetails,
} from "./pages";

const App = () => {
  const location = useLocation();
  return (
    <>
      <div className="w-full">
        {location === "/login" ? console.log(location) : <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/details/:id" element={<PostDetails />} />
          <Route path="/postdetails/:id" element={<PostDetails />} />
          <Route path="/newsdetails/:id" element={<NewsDetails />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default App;
