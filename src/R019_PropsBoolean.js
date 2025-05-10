import React, { Component } from 'react';

class R019_PropsDatatype extends Component {
  render() {
    let {
      BooleanTrueFalse
    } = this.props
    return (
    <div style={{padding: "0px"}}>
      {BooleanTrueFalse ? '2. ' : '1. '}
      {BooleanTrueFalse.toString()}
    </div>
    ) //BooleanTrueFalse값이 2이면 진실 1이면 거짓이고 이것을 글자고 나타냄
  }
}

export default R019_PropsDatatype;