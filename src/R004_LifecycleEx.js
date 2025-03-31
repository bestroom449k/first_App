import React, { Component } from 'react';

class R004_LifecycleEx extends Component {
    render() {
        console.log('3. render Call');
        return (
            <h2>[THIS IS Call]</h2>
        );
    }
}

export default R004_LifecycleEx;
// chapter 3랑 class 만드는 것은 같지만 여기서는 콜솔에 3. render Call를 출력 하도록 함
// 나머지는 같음 