import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Trending from './components/Trending';
import Technology from './components/Technology';
import Games from './components/Games';
import Science from './components/Science';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Support from './components/Support';
import Search from './components/Search';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>}>
          <Route index element={<Main />} />
          <Route path="trending" element={<Trending />} />
          <Route path="Technology" element={<Technology />} />
          <Route path="Games" element={<Games />} />
          <Route path="Science" element={<Science />} />
          <Route path="contact" element={<Contact />} />
          <Route path="Portfolio" element={<Portfolio />} />
          <Route path="Support" element={<Support />} />
          <Route path="Search" element={<Search />} />
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
