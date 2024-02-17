import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import MostRecent from './components/MostRecent';
import Trending from './components/Trending';
import Technology from './components/Technology';
import Gaming from './components/Gaming';
import Science from './components/Science';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Search from './components/Search';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import CreatePost from './components/CreatePost';
import PageNotFound from './components/PageNotFound';
import { useSelector } from 'react-redux';
import { DashboardRoute, LoginRoute, SignupRoute } from './components/PrivateRoute';
import { IsAdminCreatePost } from './components/IsAdminPrivateRoute';

export default function App() {
  const {currentUser} = useSelector(state => state.user);
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/">
          <Route index element={<Main />} />
          <Route path="*" element={<PageNotFound />}/>
          <Route path="/category/most-recent" element={<MostRecent />} />
          <Route path="/category/trending" element={<Trending />} />
          <Route path="/category/technology" element={<Technology />} />
          <Route path="/category/gaming" element={<Gaming />} />
          <Route path="/category/science" element={<Science />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/search" element={<Search />} />
          <Route element={<LoginRoute/> }>
            <Route path="/login" element={<Signin />} />
          </Route>
          <Route element={<SignupRoute/> }>
            <Route path="/signup" element={<Signup />} />
          </Route>
          <Route element={<DashboardRoute/> }>
            <Route path="/dashboard" element={<Dashboard/>} />
          </Route>
          <Route element={<IsAdminCreatePost/> }>
            <Route path="/create-post" element={<CreatePost/>} />
          </Route>
        </Route>
      </Routes>
      <Footer/>
      <ScrollToTop />
    </BrowserRouter>
    </>
  )
}
