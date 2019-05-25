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
    this.handleAdd = this.handleAdd.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleChange(e){
		this.setState({ keyword : e.target.value });
	}

  handleAdd() {
    const newItems = this.state.items.concat([
      this.state.keyword
    ]);

    this.setState({
      items: newItems,
      keyword : '',
    });

    this.inputFocus.focus();
  }

  handleKeyPress(e){
    if( e.charCode ===13 ){
      this.handleAdd();
    }
  }

  handleRemove(i) {
    const newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({items: newItems});
  }

  render() {
    const { items, keyword } = this.state;

    const view = items.map((value, index) => (
      <div
         className="animation-list"
         key={index}
         onClick={() => this.handleRemove(index)}>
        {value}
      </div>
    ));

    return(
      <div className="ani-wrapper">
        <input
          type="text"
          placeholder="작성하세요."
          value={keyword}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          ref={ ref => this.inputFocus = ref }
        />

        <button onClick={this.handleAdd}>등록</button>

        {view}
      </div>
    );
  }
}

export default Ani;
