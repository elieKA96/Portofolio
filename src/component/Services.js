import style from './Services.module.scss';

function Services() {
    return (
        <section className='containerMd'>
            <section className={`${style.service}`}>
                <h1 className='title mb-10'>Services</h1>
                <div className={`${style.serviceContent} d-flex .flex-flow justify-content `}>
                    <div>
                        <p><i class="fa-solid fa-laptop-code"></i></p>
                        <p>Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text </p>
                    </div>
                    <div className='d-flex .flex-flow flex-column'>
                        <p><i class="fa-sharp fa-solid fa-pen-ruler"></i></p>                        <p>Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text </p>
                    </div>
                </div>
            </section>
        </section>

    )
}

export default Services;