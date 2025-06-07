import React, { Component } from 'react';

class R059_FetchGet extends Component {
  componentDidMount = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const body = await response.json();
    alert(body[1].phone)
    let apple =body[1].phon
  }
  render() {
    return (
      <div style={{padding: "0px"}}>
       {apple}
        </div>
    )
  }
}

export default R059_FetchGet;
