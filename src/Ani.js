import React, { Component } from 'react';
import './Ani.css';

class Ani extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="ani-wrapper">
        <input
          type="text"
          placeholder="작성하세요."
        />
      <button>등록</button>
      <ul>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
      </ul>
      </div>
    );
  }
}

export default Ani;
