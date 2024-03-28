import React from "react";
import "./index-module.css";
import { Link } from "react-router-dom";

const styles = {
    navLinks: {
        gap: "50px",
        justifyContent: "center",
        lineHeight: "80px",
    }
}

class Header extends React.Component {
    render(){
        return(
            
            <div className='header' style={styles.navLinks} > 
           <Link style={{ textDecoration: 'none', color: '#eff1f3' }} to="/home" >home</Link>
           <Link style={{ textDecoration: 'none', color: '#eff1f3' }} to="/about" >about</Link>
           <Link style={{ textDecoration: 'none', color: '#eff1f3' }} to="/karya" >karya</Link>
           <Link style={{ textDecoration: 'none', color: '#eff1f3' }} to="/kontak" >kontak</Link>
           <Link style={{ textDecoration: 'none', color: '#eff1f3' }} to="/gallery">gallery</Link>
           <Link style={{ textDecoration: 'none', color: '#eff1f3' }} to="/cart">cart</Link>
           </div>
           
          
        )
    }
}

export default Header;
