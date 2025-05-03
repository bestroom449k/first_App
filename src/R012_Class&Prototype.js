import React, { Component } from 'react';

class ClassPrototype extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    //ES5 prototype
    var ExamCountFunc = (function () {
      function ExamCount(num) {
        this.number = num;
      }
      ExamCount.prototype.showNum = function () {
        console.log('1. react_' + this.number);
      };
      return ExamCount;
    }());
    
    var cnt = new ExamCountFunc('200');
    cnt.showNum();

    //ES6 class
    class ExamCountClass {
      constructor(num2) {
        this.number2 = num2;
      }
      showNum() {
        console.log(`2. react_${this.number2}`);
      }
    }
    
    var cnt2 = new ExamCountClass('2hundred');
    cnt2.showNum();
  }

  render() {
    return (
      <h2>[ THIS IS Class ]</h2>
    )
  }
}

export default ClassPrototype;
/*여기서는 크라스를 설명 한다.
  ES5와 ES6를 둘 다 사용했다. 
  ES5	생성자 함수
  	ES6	class 선언을 한다
    나오는 것은 같다
    이게 전채적인 내용이다.*/