import style from './Header.module.scss';
import elie from '../asset/image/elie-content.JPG';
import resumeElie from '../document/mbuyi_kayembeCV.pdf'

function HeaderContent() {
    return (
        <div className="containerBg" id='header'>
            <div className={`d-flex space-between ${style.content}`}>
                <div className='vp-content' >
                    <h1>Salut ! </h1>
                    <h1>Je suis <span>Elie Mbuyi Kayembe.</span></h1>
                    <p>Dévoloppeur web - mobile et Bachelier en Informatique</p>
                    <a href={resumeElie} download="resume" className='btn btn-green'>Télecharger CV</a>
                </div>
                <div className='image'>
                    <img src={elie} alt='elie' />
                </div>

            </div>
        </div>
    )
}

export default HeaderContent;