import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
      //  Breadcrumb: 현재 위치 또는 링크 모음 표현
       // BreadcrumbItem: 각각의 링크 항목
       
class R036_ReactstrapBreadcrumbs extends Component {
  render() {
    return (
      <div id="top">
        <Breadcrumb tag="nav" listTag="h1">
          <BreadcrumbItem tag="a" href="#topr">Go_top</BreadcrumbItem>
          <BreadcrumbItem tag="a" href="#bottom">Go_bottom</BreadcrumbItem>     
        </Breadcrumb>

        <div id="bottom" style={{marginTop:"1000px"}}>
          <span>bottom</span>
        </div>

        <div id="topr" style={{marginTop:"1000px"}}>
          <span>top</span>
        </div>
      </div>
      )
  }
}   /* htlm로 출력 id를 top으로 정한 후  <Breadcrumb>를 <nav> 태그로 만듦 listTag="div"는	내부 리스트를 <div>로 감쌈<div>말고 다른 것도 됨  
    그리고 <Breadcrumb>로 만든 글자 클릭시 id="bottom"을 받으면 bottom 출력-----------------*top으로 가는 건 내가만듬 */

export default R036_ReactstrapBreadcrumbs;