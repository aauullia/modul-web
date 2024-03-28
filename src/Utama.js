import React from 'react';
import {Route, Routes} from 'react-router-dom';

import Home from './Components/home';
import About from './Components/about';
import Karya from './Components/Karya';
import Kontak from './Components/Kontak';
import Gallery from './Components/Gallery';
import Cart from './Components/Cart';

class Utama extends React.Component {
    render(){
        return (
            <Routes>
                <Route exact path="/home" Component={Home} />
                <Route exact path="/about" Component={About} />
                <Route exact path="/karya" Component={Karya} />
                <Route exact path="/kontak" Component={Kontak} />
                 <Route exact path="/gallery" Component={Gallery}/>
                 <Route exact path="/cart" Component={Cart}/>
            </Routes>
           
        )
    }
}


export default Utama;