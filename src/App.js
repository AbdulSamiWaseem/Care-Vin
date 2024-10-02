import './App.css';
import Header from './container/header';
import bootstrap from 'bootstrap';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Classes from './pages/Classes';
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Facilities from './pages/Facilities'
import Blog from './pages/Blog'
import Footer from './container/Footer';
import FAQ from './pages/FAQ';
import About from './pages/About';
import Pg from './pages/pg404'
import { Dropdown } from 'react-bootstrap';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/classes' element={<Classes/>}> </Route>
        <Route path='/gallery' element={<Gallery/>}> </Route>
        <Route path='/contact' element={<Contact/>}> </Route>
        <Route path='/facilities' element={<Facilities/>}> </Route>
        <Route path='/blog' element={<Blog/>}> </Route>
        <Route path='/pg404' element={<Pg/>}> </Route>
        <Route path='/aboutus' element={<About/>}> </Route>
        <Route path='/faq' element={<FAQ/>}> </Route>

        <Route path='/*' element={<Home/>}></Route>
      </Routes>
      <Footer />
      </Router>
      
    </div>

  );
}

export default App;
