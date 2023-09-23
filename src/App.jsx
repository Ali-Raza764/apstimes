import React, { useEffect, useState } from 'react'
import { Header } from "./components";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import {
  AdminDetails,
  Blogs,
  CreatePost,
  Error,
  Home,
  Login,
  Members,
  NewsDetails,
  PostDetails,
} from "./pages";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./config/firebase";

const App = () => {
  const location = useLocation();
  const [authUser, setAuthUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        setLoggedIn(true);
        console.log(user);
      } else {
        setAuthUser(null);
        setLoggedIn(false)
      }
      localStorage.setItem('isloggedIn', true)
    });

    return () => {
      listen();
    };
  }, [authUser]);
  return (
    <>
      <div className="w-full">
        {location.pathname == "/login" ?("") : (<Header loggedIn={loggedIn} authUser={authUser} />)}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/details/:id" element={<PostDetails />} />
          <Route path="/postdetails/:slug" element={<PostDetails />} />
          <Route path="/newsdetails/:slug" element={<NewsDetails />} />
          <Route path="/create" element={<CreatePost authUser={authUser}/>} />
          <Route path="/admin" element={<AdminDetails authUser={authUser} />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/members" element={<Members />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
