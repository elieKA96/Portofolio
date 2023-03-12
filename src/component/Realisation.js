import style from './Realisation.module.scss';
import figma from '../asset/image/figma.png';
import post from '../asset/image/post-message.png';
import crud from '../asset/image/ajax-crud.png';
import todo from '../asset/image/todoList.png';

function Realisation() {


    return (
        <div className='containerBg '>
            <div className={` ${style.realisation}`} id="realisations">
                <h1 className='title p-10  mb-10'>Réalisations </h1>
                <div className={`${style.serviceContent} d-flex flex-flow gap justify-content`}>
                    <div className={` ${style.card} mb-20 d-flex flex-column`}>
                        <div className='image-card'>
                            <img src={figma} alt='figma' />
                        </div>
                        <h3>Projet Figma Portofolio</h3>
                        <p> < a href="https://www.figma.com/file/9w1xOAqm34WhdO1rmCruz2/Portofolio-version1?node-id=0%3A1&t=9GCCfmNqNy1V2FrP-0" target={'_blank'}>Maquette du Portofolio </a></p>
                    </div>
                    <div className={` ${style.card} mb-20 d-flex flex-column`}>
                        <div className='image-card'>
                            <img src={post} alt='post' />
                        </div>
                        <h3>Post Message(Forum)</h3>
                        <p><a href='https://github.com/elieKA96/postMessage' target={'_blank'}>En utilisant le builder parcel js et dependance</a></p>
                    </div>
                    <div className={` ${style.card} mb-20 d-flex flex-column`}>
                        <div className='image-card'>
                            <img src={crud} alt='crud' />
                        </div>
                        <h3>Crud </h3>
                        <p><a href="https://github.com/elieKA96/react_exercice_ajax_class_component" target={'_blank'}>Utilisation d'ajax avec react js</a></p>
                    </div>
                    <div className={` ${style.card} mb-20 d-flex flex-column`}>
                        <div className='image-card'>
                            <img src={todo} alt='todoList' />
                        </div>
                        <h3>todoList</h3>
                        <p> <a href="https://github.com/elieKA96/javascript_project_TodoList" target={'_blank'}>Todo List avec javascript</a></p>
                    </div>

                </div>
            </div>
        </div>


    )
}

export default Realisation;

//https://github.com/elieKA96/react_exercice_ajax_class_component