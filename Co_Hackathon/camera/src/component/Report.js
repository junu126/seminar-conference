import React from 'react';
import ff from '../img/firefighter.png';
import './report.css';

const report = () => {
    return (
        <div id="report">
            <img src={ff} alt="소방관" className="firefighter"/>
            <span className="layer">119</span>
        </div>
    );
}

export default report;