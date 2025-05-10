import React, { Component } from 'react';
import datatype from 'prop-types';

class R021_PropsRequired extends Component {
  render() {
    let {
      ReactString,
      ReactNumber
    } = this.props
      //불러옴
    return (
    <div style={{padding: "0px"}}>
      {ReactString}{ReactNumber}
    </div>
    )
  } //  {ReactString} 써라 {ReactNumber}이것을
}

R021_PropsRequired.propTypes = {
  ReactString: datatype.isRequired,
}
//검사
export default R021_PropsRequired;