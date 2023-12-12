import React from 'react';
import './style.css';


function Header() {
    return (
       
        <div className="App">
           
           {/* Creation du header avec logo et de deux liens Accueil + A propos */}
            
                <div className="header">
                     
                          <img src="/image/logo.webp" alt="logo" className='logo__img' />
    

    <nav className="menu">
        <ul>
            <li><a href="#">Accueil</a></li>
            <li><a href="#">A propos</a></li>
        </ul>

            </nav>
    </div>
        </div>
    );
}

export default Header;
