import React from 'react';
import setting from '../img/repairing-service.png';
import './bar.css';


const Bar = ({tempe, temperature, value, icon, onClick, value_}) => {
    return (
        <div className="bar">
            <div className={tempe}>
                <span className="temperature-text">{temperature}°C</span>
            </div>
            <div className={value_}>
                <img className="value-icon" src={icon} alt="모양"/>
                <span className="value-text">{value}</span>
                <img className="value-icon" src={icon} alt="모양"/>
            </div>
            <div className="setting">
                <img className="setting-icon" onClick={onClick} src={setting} alt="세팅"/>
            </div>
        </div>
    );
}

export default Bar;