import style from './Services.module.scss';

function Services() {
    return (
        <section className='containerBg'>
            <section className={`${style.service} `} id="services">
                <h1 className='title p-10  mb-10'>Services</h1>
                <div className={`${style.serviceContent} d-flex .flex-flow gap justify-content `}>
                    <div>
                        <p><i class="fa-solid fa-laptop-code"></i></p>
                        <p>Réalisation des applications web responsives adaptables sur toutes formes d'ecran </p>
                    </div>
                    <div className='d-flex .flex-flow flex-column'>
                        <p><i class="fa-sharp fa-solid fa-pen-ruler"></i></p>
                        <p>Réalisation et conception des maquettes UX/UI  </p>
                    </div>
                </div>
            </section>
        </section>

    )
}

export default Services;