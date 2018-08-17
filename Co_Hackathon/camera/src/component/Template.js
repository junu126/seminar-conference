import React from 'react';
import set from '../img/settings.png';
import set_ from '../img/support.png';
import './template.css';

const Template = ({onClick_hu, setting_, nav, first,close, main, bar, setting, onClick_close, onChange_easy, onChange_normal, onChange_hard, gray, easy, normal, hard}) => {
    return (
        <div id="Main">
            <div className={gray}></div>
            <div className={setting}>
                <img className="giar" src={set} alt="톱니"/>
                <p className="set">안전:<input className="input" onChange={onChange_easy}></input>°C</p>
                <p className="set">위험:<input className="input" onChange={onChange_normal}></input>°C</p>
                <p className="set">화재:<input className="input" onChange={onChange_hard}></input>°C</p>
                <div className={close} onClick={onClick_close}>
                    <span className="save-text">저장/</span>
                    <span className="close-text">닫기</span>
                </div>
            </div>
            <div className={setting_}>
                <img className="giar_" src={set_} alt="톱니"/>
                <p className="set_">관계자1 : 010-1234-5678</p>
                <p className="set_">관계자2 : 010-2345-6789</p>
                <p className="set_">관계자3 : 010-3456-7890</p>
                <div className={close} onClick={onClick_hu}>
                    <span className="save-text_">저장/</span>
                    <span className="close-text_">닫기</span>
                </div>
            </div>
            {first}
            {nav}
            <div id="middle">
                {main}
                {bar}
            </div>
        </div>
    );
}

export default Template;