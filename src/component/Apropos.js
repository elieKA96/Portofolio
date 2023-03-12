import React, { useState, useEffect } from "react";
import './slide.css'
import data from './dataAbout';



function Apropos() {
    const [about] = useState(data);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = about.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, about]);


    return (
        <section className="content " id="apropos">
            <h1 className='titre p-10  mb-20'>Apropos</h1>
            <div className="section-center">
                {about.map((item, indexAbout) => {
                    const { id, quote } = item;
                    let position = "nextSlide";
                    if (indexAbout === index) {
                        position = "activeSlide";
                    }
                    if (
                        indexAbout === index - 1 ||
                        (index === 0 && indexAbout === about.length - 1)
                    ) {
                        position = "lastSlide";
                    }
                    return (
                        <article className={position} key={id}>
                            <p className="quote" >{quote}</p>
                        </article>
                    );
                })}
                <button className="prev" onClick={() => setIndex(index - 1)}>
                    <i className="fas fa-arrow-left" />

                </button>
                <button className="next" onClick={() => setIndex(index + 1)}>
                    <i className="fas fa-arrow-right" />
                </button>
            </div>
        </section>

    );

}
export default Apropos;
