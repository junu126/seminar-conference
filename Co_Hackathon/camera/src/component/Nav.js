import React from 'react';
import logo from '../img/no-file.png';
import Report from './Report';
import comp from '../img/wilteack.png';
import './nav.css';

const Nav = ({report, tra, mes}) => {
    return (
        <div id="nav">
            <div className="nav-logo">
                <img src={logo} className="no-fire-rogo" alt="로고"/>
                <div id="nav-NBF">NBF</div>
            </div> 
            <span id={mes}>{tra}</span>
            {report = <Report/>}
            <img src={comp} className="wilteack" alt="회사로고"/>
        </div>
    );
}

export default Nav;