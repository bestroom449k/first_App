import React, { Component } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
        // DropdownToggle 이 버튼을 누르면 메뉴가 열림/닫힘      DropdownMenu: 실제로 펼쳐지는 메뉴 영역.
        // DropdownItem으로 그안에 넣음 ButtonDropdown: 대표 매뉴 클릭시 하위 매뉴 나옴

class R037_ReactstrapDropdown extends Component {
  constructor (props) {
    super(props);
    this.state = {
      dropdownOpen: false
    }
  }
    //isOpen: true면 펼쳐짐, false면 닫힘.
    //toggle: 버튼 클릭 시 실행할 함수.

  toggle = (e) => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  }
    //이밴트 실행 앞에 dropdownOpen: false 이 dropdownOpen 이 것짓

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
      <DropdownToggle caret>버튼 Dropdown</DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>헤더</DropdownItem>
        <DropdownItem disabled>비활성화 버튼</DropdownItem>
        <a href="http://example.com/">
          <DropdownItem>example 사이트로 이동</DropdownItem>
        </a>
        <DropdownItem onClick={e => alert("Alert 버튼")}>Alert 버튼</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
      )
  }
}
    //caret은 아래 화살표 표시를 붙여주는 속성.
export default R037_ReactstrapDropdown;
