import React from 'react';
//import './App.css';
import ReactstrapAlerts from './R034_ReactstrapAlerts'
import ReactstrapBadge from './R035_ReactstrapBadges'
import ReactstrapBreadcumbs from './R036_ReactstrapBreadcrumbs'
import ReactstrapDropdown from './R037_ReactstrapDropdown'
import ReactstrapButtonGroup from './R038_ReactstrapButtonGroup'
import ReactstrapBottons from './R039_ReactstrapBottons'
import ReactstrapCard from './R040_ReactstrapCard'
import ReactstrapCarousel from './R041_ReactstrapCarousel'
import ReactstrapCollapse from './R042_ReactstrapCollapse'
import ReactstrapFade from './R043_ReactstrapFade'
import ReactstrapForm from './R044_ReactstrapForm'
//import Jumbotron from './R046_ReactstrapJumbotron'
import 'bootstrap/dist/css/bootstrap.css'

  // 설치한 bootstrap에 bootstrap.css를 불러 온다.

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>

           <ReactstrapAlerts/>
          <ReactstrapBadge/>
          <ReactstrapBreadcumbs/>
          <ReactstrapDropdown/>
          <ReactstrapButtonGroup/>
          <ReactstrapBottons/>
          <ReactstrapCard/> `1`
       <ReactstrapCollapse/>
       <ReactstrapFade/>
      <ReactstrapForm/>
     {/* Jumbotron*/}
     

    </div>
  );
}   // ReactstrapAlerts불러 오기

export default App;
//          <ReactstrapCarousel/>  에러 문제로 뺌
//import InputGroup from './R045_ReactstrapInputGroup'  <InputGroup/>