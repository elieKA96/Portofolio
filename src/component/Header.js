//import style from './Header.module.scss';
import { useState } from 'react';
import { Link } from 'react-scroll';
import './Header.css';


function Header() {
    const [isMobile, setIsMobile] = useState(false);
    return (
        <nav className='navbar  d-flex flex-flow justify-content space-between'>
            <h1><Link activeClass="active" smooth spy to="header">ELIE KAYEMBE<span>.</span></Link></h1>

            <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
                onClick={() => setIsMobile(false)}
            >
                <Link activeClass="active" smooth spy to="header" className='home'>
                    <li>Accueil</li>
                </Link>
                <Link activeClass="active" smooth spy to="apropos" className='home'>
                    <li>Apropos</li>
                </Link>
                <Link activeClass="active" smooth spy to="competences" className='home'>
                    <li>Compétences</li>
                </Link>
                <Link activeClass="active" smooth spy to="services" className='home'>
                    <li>Services</li>
                </Link>
                <Link activeClass="active" smooth spy to="realisations" className='home'>
                    <li>Realisation</li>
                </Link>
                <Link Link activeClass="active" className='home' smooth spy to="contact">
                    <li className='btn btn-green'>Contact</li>
                </Link>
            </ul>
            <button className="mobile-menu-icon"
                onClick={() => setIsMobile(!isMobile)}
            >
                {isMobile ? <i className='fas fa-times'></i> : <i className='fas fa-bars'></i>}
            </button>
        </nav>
    )
}

export default Header;


/**
 
 * 
 * < nav className={` d-flex  space-between ${style.nav}`}>
            <h1>
                <Link activeClass="active" smooth spy to="header">ELIE KAYEMBE<span>.</span></Link>
            </h1>

            <ul className='d-flex  space-between flex-flow'>

                <li> <Link activeClass="active" smooth spy to="header">Accueil</Link></li>
                <li> <Link activeClass="active" smooth spy to="apropos">Apropos</Link></li>
                <li> <Link activeClass="active" smooth spy to="competences">Compétences</Link></li>
                <li> <Link activeClass="active" smooth spy to="services">Services</Link></li>
                <li> <Link activeClass="active" smooth spy to="realisations">Réalisations</Link></li>
                <li> <Link activeClass="active" className='btn btn-green' smooth spy to="contact">Contact</Link></li>

            </ul>
        </nav>
 */



