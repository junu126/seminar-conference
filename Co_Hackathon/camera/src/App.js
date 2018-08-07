import React, { Component } from 'react';
import Template from './component/Template';
import Nav from './component/Nav';
import First from './component/First';
import Main from './component/Main';
import Bar from './component/Bar';
import axios from 'axios';

import smile from './img/smile.png';
import warning from './img/warning.png';
import burn from './img/fire.png';

import './App.css';
class App extends Component {

  state = {
    message : "정상 온도입니다.",
    vidio : "../img/opso.png",
    value : '안전 상황',
    icon : smile,
    gray : "gray-off",
    setting : "set-setting-off",
    close : "close-on",
    tem : 1,
    easy : 40,
    normal : 50,
    hard : 90,
    value_ : "value-easy",
    mes : "messaga-easy",
    tempe : "temperature-easy",
    setting_ : "set-setting-hu-off"
  }

  getvidio = () => {
    axios.get(`http://192.168.0.133:6969/data/image`)
    .then(res => {
      let _vidio = res.data.bytearray;
      this.setState({
        vidio : _vidio
      })
    })
  }

  getdata = () => {
    axios.get(`http://192.168.0.133:6969/data/tem`)
    .then(res => {
      let temp = res.data.value[2];
      this.setState({
        tem : temp
      })
    })
  }

  onChange = () => {
    this.getdata();
    this.getvidio();

    let {normal, hard, tem} = this.state;

    if(tem < normal) {
      this.setState({
        icon : smile,
        value : '안전 상황',
        message : "정상 온도입니다.",
        value_ : "value-easy",
        mes : "messaga-easy",
        tempe : "temperature-easy"
      })
    } else if(tem >= normal && tem < hard) {
      this.setState({
        icon : warning,
        value : '화재 경고',
        message : "위험 온도입니다.",
        value_ : "value-normal",
        mes : "messaga-normal",
        tempe : "temperature-normal"
      })
    } else {
      this.setState({
        icon : burn,
        value : '화재 발생',
        message : "화재가 발생했습니다.",
        value_ : "value-hard",
        mes : "messaga-hard",
        tempe : "temperature-hard",
        setting_ : "set-setting-hu-on",
        gray : "gray-on",
      })
    }
  }

  onClick = () => {
    this.setState({
      gray : "gray-on",
      setting : "set-setting-on"
    })
  }

  onClick_close = () => {
    let {close} = this.state;

    this.setState({
      gray : "gray-off",
      setting : "set-setting-off",
    })
  }

  onClick_hu = () => {
    let {close} = this.state;

    this.setState({
      gray : "gray-off",
      setting_ : "set-setting-off",
    })
  }


  componentDidMount(){
    this.getdata();
  }

  render() {    
    return (
      
      <Template
        easy = {this.state.easy}
        normal = {this.state.normal}
        hard = {this.state.hard}
        onChange = {this.onChange}
        gray = {this.state.gray}
        setting = {this.state.setting}
        setting_ = {this.state.setting_}
        close = {this.state.close}
        onClick_close = {this.onClick_close}
        onClick_hu = {this.onClick_hu}
        first = {<First />}
        nav = {<Nav
          tra = {this.state.message}
          mes = {this.state.mes}
        />}
        main = {<Main 
          vidio = {this.state.vidio}
          onChange = {this.onChange}
        />}
        bar = {<Bar
          tempe = {this.state.tempe}
          temperature = {this.state.tem}
          value = {this.state.value}
          icon = {this.state.icon}
          onClick = {this.onClick}
          value_ = {this.state.value_}
        />}
      />
    );
  }
}

export default App;
