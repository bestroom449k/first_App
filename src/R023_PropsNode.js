import React, { Component } from 'react';

class R023_PropsNode extends Component {
  render() {
    return (
    <div style={{padding: "0px"}}>
      {this.props.children}
    </div>
    )
  }   // 여기서 props.children로 span을 받아 씀
}

export default R023_PropsNode;
