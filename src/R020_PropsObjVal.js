import React, { Component } from 'react';
import datatype from 'prop-types';

class R020_PropsObjVal extends Component {
  render() {
    let {
      ObjectJson
    } = this.props
      //부루기
    return (
    <div style={{padding: "0px"}}>
      {JSON.stringify(ObjectJson)}
    </div>
    )
  }
}  // JSON 방식으로 ObjectJson값을 문자열로 나타 냄

R020_PropsObjVal.propTypes = {
  ObjectJson: datatype.shape({
    react: datatype.string,
    twohundred: datatype.number
  })
} //어건는 검사하는 코드 없어도됨

export default R020_PropsObjVal;