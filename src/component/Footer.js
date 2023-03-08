import style from './Footer.module.scss';

function Footer() {
    return (
        <div className={`d-flex flex-column justify-content align-items  ${style.contact} `}>
            <h2>ELIE MB KAYEMBE<span>.</span></h2>
            <p>Copyright &#169; Mars - 2023, Ottignie-Louvain-La-Neuve Dev - All rights reserved.</p>
        </div>

    )
}

export default Footer;