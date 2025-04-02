import React, { Component } from 'react';

class R006_LifecycleEx extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log('2. getDerivedStateFromProps Call :'+props.prop_value);
    return {};
  }
  constructor(props) {
    super(props);
    this.state = {};
    console.log('1. constructor Call');
  }

  render() {
console.log ('3. render Call');
    return (
      <h2>[ THIS IS CONSTRUCTOR FUCNTION ]</h2>
    )
  }
}

export default R006_LifecycleEx;
// 컴포넌트가 처음 실행될 때 constructor → getDerivedStateFromProps → render 순서로 실행
//부모가 넘겨준 props를 확인할 때 getDerivedStateFromProps()가 호출됨!