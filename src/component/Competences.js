import style from './Competences.module.scss';

function Competences() {
    return (
        <section className={` ${style.competence} `} id="competences" >
            <section className='containerBg '>
                <h1 className='title p-10  mb-20'>Competences</h1>
                <div className=' d-flex flex-flow space-between align-items'>
                    <h3>HTML & CSS</h3>
                    <div className={`${style.container}`}>
                        <div className={`${style.skills} ${style.html}`}>80%</div>
                    </div>
                </div>

                <div className='d-flex flex-flow space-between align-items'>
                    <h3>JavaScript</h3>

                    <div className={`${style.container}`}>
                        <div className={`${style.skills} ${style.js}`}>65%</div>
                    </div>
                </div>

                <div className='d-flex flex-flow space-between align-items'>
                    <h3>React JS</h3>
                    <div className={`${style.container}`}>
                        <div className={`${style.skills} ${style.react}`}>55%</div>
                    </div>
                </div>

                <div className='d-flex flex-flow space-between align-items'>
                    <h3>Java</h3>
                    <div className={`${style.container}`}>
                        <div className={`${style.skills} ${style.java}`}>60%</div>
                    </div>
                </div>

            </section>
        </section >

    )
}
export default Competences;