import React from 'react';
import Opso from '../img/opso.png';
import OpFf from '../img/opfire.png';
import './main.css'

const main = ({onChange, vidio}) => {
    return (
        <div className="main-mid">
            <img className="img" src={Opso} alt="소화기"/>
            <img className="img_vidio" onChange={onChange} src={Opso/*vidio*/} alt="영상"/>
            <img className="img" src={OpFf} alt="소방사"/>
        </div>
    );
    
}

export default main;