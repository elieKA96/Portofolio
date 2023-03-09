import style from './Apropos.module.scss';



function Apropos() {
    return (
        <div className={` containerMd ${style.content}`}>
            <h1 className='title mb-10'>Apropos</h1>
            <div >

                <p>Récemment diplômé de bachelier en Informatique
                    de L’université technique de communication et de
                    l’informatique de Moscou, passionné de nouvelle
                    technologie et de la programmation web et aussi ouvert
                    à m’améliorer dans certains domaine comme dans l’analyse
                    des données.</p>

            </div>

        </div>

    );

}
export default Apropos;
