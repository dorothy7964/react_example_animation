import React, { Component } from 'react';
import './Ani.css';

class Ani extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['hello', 'world', 'click', 'me']
    }
  }

  render() {
    const { items } = this.state;
    const view = items.map((value, index) => {
      return <li key={index}>{value}</li>
    });

    return(
      <div className="ani-wrapper">
        <input
          type="text"
          placeholder="작성하세요."
        />

        <button>등록</button>

        <ul>
          {view}
        </ul>
      </div>
    );
  }
}

export default Ani;
