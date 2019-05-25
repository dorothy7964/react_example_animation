import React, { Component } from 'react';
import './Ani.css';

class Ani extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['hello', 'world', 'click', 'me'],
      keyword : ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
		this.setState({ keyword : e.target.value });
	}

  render() {
    const { items, keyword } = this.state;
    const view = items.map((value, index) => {
      return <li key={index}>{value}</li>
    });

    return(
      <div className="ani-wrapper">
        <input
          type="text"
          placeholder="작성하세요."
          value={keyword}
          onChange={this.handleChange}
        />

        <button>등록</button>

        <ul>
          {view}
        </ul>
        {this.state.keyword}
      </div>
    );
  }
}

export default Ani;
