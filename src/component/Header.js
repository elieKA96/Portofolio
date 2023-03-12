import style from './Header.module.scss';
//import elie from '../asset/image/elie-content.JPG';
//import resume from '../document/CV_DANIEL.pdf';
import { Link } from 'react-scroll'


function Header() {
    return (

        < nav className={` d-flex  space-between ${style.nav}`}>
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


    )
}

export default Header;