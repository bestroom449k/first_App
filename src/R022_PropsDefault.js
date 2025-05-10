import React, { Component } from 'react';

class R022_PropsDefault extends Component {
  render() {
    let {
      ReactString,
      ReactNumber
    } = this.props
    return (
    <div style={{padding: "0px"}}>
      {ReactString}{ReactNumber}
    </div>
    )
  }
}//여기 까지는 같음

R022_PropsDefault.defaultProps = {
  ReactString: "리액트",
  ReactNumber: 400
} // props를 사용 하지 않고 props를 전달하지 않아도 설정함
 //ReactNumber: 400은 없어도됨
export default R022_PropsDefault;