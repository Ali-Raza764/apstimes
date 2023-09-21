import React, { useEffect, useState } from 'react'
import { Header, Footer } from "./components";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import {
  AdminDetails,
  CreatePost,
  Error,
  Home,
  Login,
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
        setAuthUser(authUser);
        setLoggedIn(true);
      } else {
        setAuthUser(null);
        setLoggedIn(false)
      }
    });

    return () => {
      listen();
    };
  }, []);
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
          <Route path="/create" element={<CreatePost />} />
          <Route path="/admin" element={<AdminDetails />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default App;
