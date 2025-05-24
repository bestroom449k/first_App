import React, { Component } from 'react';
import { Badge, Button } from 'reactstrap';
 // reactstrap 사용할 기능을{}안에 넣음
    //Badge: 뱃치 기능
    //Button: 버튼 기능
class R035_ReactstrapBadges extends Component {
  render() {
    return (
      <div>
        <h1>PRODUCT NAME <Badge color="secondary">hit</Badge></h1>
        <Button color="light" outline>      
          Accessor <Badge color="dark">4</Badge>
        </Button>
        <Badge color="danger" pill>pill</Badge>
        <Badge href="http://example.com" color="light">GoLink</Badge>
      </div>
    )
  }
}       // 버튼안에 배지를 넣고 <pill>을 사용해 둥글게 모양을 만듬 그리고 배지에 링크를 걸음

export default R035_ReactstrapBadges;