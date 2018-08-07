import React from 'react';
import rogo from '../img/no-file.png';
import './first.css';

const First = () => {
    return (
        <div id="bg">
            <div className="mid">
                <div id="mid-in">
                    <img src={rogo} alt="노불" className="no-fire"/>
                    <span className="NBF">NBF</span>
                    <div className="mid-in-p"><span className="text">N<span className="text-style-1">one</span>B<span className="text-style-1">urning</span>F<span className="text-style-1">actory</span></span></div>
                </div>
            </div>
        </div>
    );
}

export default First