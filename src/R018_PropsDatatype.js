import React, { Component } from 'react';
import datatype from 'prop-types';

class R018_PropsDatatype extends Component {
  render() {
    let {
      String, Number, Boolean, Array, ObjectJson, Function
    } = this.props
    return (
    <div style={{padding: "0px"}}>
      <p>StringProps: {String}</p>
      <p>NumberProps: {Number}</p>
      <span>BooleanProps: {Boolean.toString()}</span>
      <p>ArrayProps: {Array.toString()}</p>
      <p>ObjectJsonProps: {JSON.stringify(ObjectJson)}</p>
      <p>FunctionProps: {Function}</p>
    </div>
    )
  }/* App.js에서 만든 코드 를 불러오고 글자로 쓸수 없는 것은 글자로 표현함 */
}

R018_PropsDatatype.propTypes = {
  String: datatype.number,
  Number: datatype.number,
  Boolean: datatype.bool,
  Array: datatype.array,
  ObjectJson: datatype.object,
  Function: datatype.func,
} //정검 코드 없어도 됨

export default R018_PropsDatatype;