import React, { Component } from 'react';
import axios from "axios";

class R061_AxiosGet extends Component {
  componentDidMount(){
    axios.get('http://date.jsontest.com/')
    .then( response => {alert(response.data.date)})
  }
    // fetch의 차이점 axios는 간단하고 한 번에 .data 으로 출력 가능 fetch는 수동으로 .json() 호출해야 함
  render() {
    return (
        <h1>axios get</h1>
    )
  }
}

export default R061_AxiosGet;
