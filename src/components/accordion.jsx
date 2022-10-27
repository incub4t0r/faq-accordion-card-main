import React from 'react'
import { useState } from 'react';
import arrow from '../images/icon-arrow-down.svg';

const Accordion = ({ title, text }) => {
    const [isActive, setIsActive] = useState(false);
    const [rotateChevron, setRotateChevron] = useState(false);
    const [bolded, setBolded] = useState(false);

    function toggleClass() {
        setIsActive(!isActive);
        setRotateChevron(!rotateChevron);
        setBolded(!bolded);
    };
    return (
        <div className="accordion-item">
            <div className="accordion-title"  onClick={toggleClass}>
                <p className={bolded ? 'bolded-text': ''}>{title}</p>
                <img className={`svg-arrow ${rotateChevron ? "chevron-rotate" : ''}`} src={arrow} alt="arrow down icon" />
            </div>
            {isActive && <div className="accordion-content">{text}</div>}
            <hr />
        </div>
    )
}

export default Accordion;
