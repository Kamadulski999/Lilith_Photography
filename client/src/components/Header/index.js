import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import Dropdown from '../Dropdown';

const Header = ({modal, setModal}) => {      
    const [click, setClick] = useState(false)
    const [dropdown, setDropDown] = useState(false)

    const handleClick = () => setClick(!click)

    const closeMobileMenu = () => {
        setClick(false);
    }

    const onMouseEnter = () => {
        if(window.innerWidth <960) {
            setDropDown(false)
        } else {
            setDropDown(true)
        }
     };

         
    const onMouseLeave = () => {
     
            setDropDown(false)
        };
     


  return (
    <header className="flex-row align-center">     
        <nav className="navbar">
        <Link to="/" className={modal ? 'display-none' : 'lilith'}>Lilith Photography</Link>
            <div className={modal ? 'display-none': 'menu-icon'} onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <div className="nav-menu-container">   
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to="/" className='nav-links' onClick={closeMobileMenu}>Home</Link>
              </li>
              <li className='nav-item'>
              <Link to="/About" className='nav-links' onClick={closeMobileMenu}>About</Link>
              </li>
              <li className='nav-item'
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}>
              <Link to="/Gallery"
               className='nav-links'
               onClick={closeMobileMenu}>Galleries</Link>
               {dropdown && <Dropdown/>}
              </li>
              <li className='nav-item'>
              <Link to="/Contact" className='nav-links' onClick={closeMobileMenu}>Contact</Link>
              </li>                       
                  
              </ul> 
              </div>                 
        </nav>
      
    </header>
  );
};

export default Header;
