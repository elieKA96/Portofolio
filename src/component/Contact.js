import style from './Contact.module.scss';

function Contact() {
    return (
        <section className='containerBg ' id='contact'>

            <section className={` ${style.contact} d-flex flex-column  align-items `}>
                <h1 className='title p-10  mb-10'>Contact</h1>
                <div className={`${style.contentContact} d-flex  .flex-flow justify-content align-content `}>

                    <div >
                        <p><i class="fa-solid fa-location-dot"></i></p>
                        <p>Voie du Roman Pays 5/204, 1348 Ottignie-Louvain-La-Neuve,Belgique</p>
                    </div>
                    <div >
                        <p><i class="fa-solid fa-phone-flip"></i></p>
                        <p>+32-465-19-41-42</p>
                    </div>
                    <div >
                        <p>  <i class="fa-regular fa-envelope"></i></p>

                        <p>mbuyikayembe96@gmail.com</p>
                    </div>
                </div>
                <div className={`${style.social} d-flex justify-content align-items  space-around`}>
                    <a href='https://www.instagram.com/elie_mbka/' target={'_blank'}><i class="fa-brands fa-instagram"></i></a>
                    <a href='https://www.linkedin.com/in/mbuyi-kayembe-335819264/' target={'_blank'}> <i class="fa-brands fa-linkedin"></i></a>
                    <a href='https://github.com/elieKA96' target={'_blank'}> <i class="fa-brands fa-github"></i></a>
                </div>
            </section >
        </section>

    )
}

export default Contact;

