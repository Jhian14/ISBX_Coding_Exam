import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Home from "./views/home";
import About from "./views/about";
import Footer from "./components/footer";
import UserList from './views/user/list';
import CreateUser from './views/user/create';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about/*" element={<About />} />
          <Route path="user/list" element={<UserList />} />
          <Route path="user/create" element={<CreateUser />} />
        </Routes>

        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
