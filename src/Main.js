import React from 'react';
import { Routes ,Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Portfolio from './pages/Portfolio';
import Interests from './pages/Interests';
import Socials from './pages/Socials';

const Main = () => {
    return (
        <Routes> {/* The Switch decides which component to show based on the current URL.*/}
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/Experience' element={<Experience/>}></Route>
            <Route path='/Portfolio' element={<Portfolio/>}></Route>
            <Route path='/Interests' element={<Interests/>}></Route>
            <Route path='/Socials' element={<Socials/>}></Route>
        </Routes>
    );
}

export default Main;