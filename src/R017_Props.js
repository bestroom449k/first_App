import React, { Component } from 'react';

class R017_Props extends Component {
  render() {
    let props_value = this.props.props_val;   //props_value것은 이 클래스에서 props  props_val부른 후 from App.js더함
    props_value += ' from App.js'
    return (
    <div>{props_value}</div>
    )
  }
}

export default R017_Props;