import style from './Header.module.scss';
import elie from '../asset/images/elie-content.JPG';


function Header() {
    return (
        <div className="containerBg">
            < nav className={` d-flex  space-between sticky ${style.nav}`}>
                <h1>
                    <a href='#'>ELIE KAYEMBE<span>.</span></a>
                </h1>
                <ul className='d-flex  space-between flex-flow'>
                    <li><a href='#'>Accueil</a></li>
                    <li><a href='#'>Apropos</a></li>
                    <li><a href='#'>Compétences</a></li>
                    <li><a href='#'>Services</a></li>
                    <li><a href='#'>Galerie</a></li>
                    <li><a href='#' className='btn btn-green'>Contact</a></li>
                </ul>
            </nav>
            <div className={`d-flex space-between ${style.content}`}>
                <div className='vp-content' >
                    <h1>Bienvenu dans mon site</h1>
                    <h1>Je suis <span>Mbuyi Kayembe Elie.</span></h1>
                    <p>Dévoloppeur web junior et Bachelier en Informatique</p>
                    <a href='#' className='btn btn-green'>Télecharger CV</a>
                </div>
                <div className='image'>
                    <img src={elie} alt='elie' />
                </div>

            </div>

        </div>
    )
}

export default Header;