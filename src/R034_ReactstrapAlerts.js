import React, { Component } from 'react';
import { Alert, UncontrolledAlert } from 'reactstrap';
  // reactstrap 사용할 기능을{}안에 넣음
    //Alert: 알림 기능
    //UncontrolledAlert: 색제 기능이 추가된 알림


class R034_ReactstrapAlerts extends Component {
  render() {
    return (
      <div>
      <Alert color="light">
        Simple Alert [color : light]
      </Alert> 
      <UncontrolledAlert color="warning">
        Uncontrolled Alert [color : warning]
      </UncontrolledAlert>
      </div>
    )
  }
} //그냥 알림 버튼 
  //색제 기능이 추가된 알림 버튼 
export default R034_ReactstrapAlerts;