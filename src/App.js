import React from 'react';
import Navbar from './components/Navigation';
import './styles.css';
import { BrowserRouter,Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Intro from './components/Intro';
import Experience from './components/Experience';

const App = () => {
    return (
        <div>
        <BrowserRouter>
        <Navbar />
        <Route path="/" exact component={Home}></Route> 
        <Route path="/about" component={About}></Route> 
        <Route path="/contact" component={Contact}></Route> 
        <Route path="/gallery" component={Gallery}></Route> 
        <Route path="/intro" component={Intro}></Route> 
        <Route path="/experience" component={Experience}></Route>
        </BrowserRouter>
        </div>
    )
}

export default App;
