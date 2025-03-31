import React, { Component } from 'react';

class R005_LifecycleEx extends Component {
    constructor(props) {
        super(props);
        console.log('1. constructor Call');
    }

    render() {
        console.log('3. render Call');
        return (
            <h2>[THIS IS CONSTRUCTOR FUNCTION]</h2>
        );
    }
}

export default R005_LifecycleEx;

// constructor(props)가 가장먼저 실행되는 생명함수의 생성이고 이게 콜솔에 '1. constructor Call를 뿌리고 
// render가 콜솔로 에 3. render Call 나타냄
//props를 사용하지 않으면 constructor(props)는 필요 없다,
// state 초기화나 this 바인딩이 필요할 때만 constructor()를 사용한다.
//prop는 표시