// Libs
import React, { Component } from 'react';

class TodoList  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      items: [],
      isModalOpen: false,
      editItem: false,
    }
  }

  handleInput = (event) => {
    this.setState({ value: event.target.value});
  }

  handleAdd = () => {
    this.setState({ 
      value: '',
      items: [...this.state.items, this.state.value],
      editItem: false,
    })
  }

  handleDeleteAll = () => {
    this.setState({ items: [] });
  }

  /* here the 'itenzinho' is the 'item', but under another name, not to give conflict */
  handleDelete = (itenzinho) => {
    this.setState({
      items: this.state.items.filter(item => item !== itenzinho)
    })
  }

  /* here the 'itenzinho' is the 'item', but under another name, not to give conflict */
  handleEditItem = (itenzinho) => {
    const selectedItem = this.state.items.find(item => item === itenzinho);

    this.setState({
      items: this.state.items.filter(item => item !== itenzinho),
      value: selectedItem,
    })
  }

  handleOpenModal = () => {
    this.setState({ isModalOpen: true });
  }

  handleCloseModal = () => {
    this.setState({ isModalOpen: false })
  }

  renderDelConfirmation = () => {
    return (
      <div style={{ position: 'absolute', backgroundColor: '#c7c7c7' }}>
        <div style={{ padding: '1rem', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
          <p>Ok, CLOSEE</p>
          <span>
            <button onClick={this.handleCloseModal}>close</button>
          </span>
        </div>
      </div>
    );
  }
  
  render() {
    return (
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
				<h1>TODO LIST</h1>
        <span style={{ display: 'flex'}}>
          <input value={this.state.value} type="text" onChange={this.handleInput} />
          <button onClick={this.handleAdd}>add</button>
          <button onClick={this.handleDeleteAll}>delete all</button>
        </span>
        <div>
          <ul>
            {
              this.state.items.map((item, index) => {
                return (
                  <div key={index} style={{ display: 'flex'}}>
                    <li key={index}>{item}</li>
                    <button onClick={this.handleOpenModal}>click!</button>
                    <button onClick={() => this.handleDelete(item)}>delete</button>
                    <button onClick={() => this.handleEditItem(item)}>edit</button>
                  </div>
                );
              })
            }
          </ul>
        </div>
        {this.state.isModalOpen && this.renderDelConfirmation()}
			</div>
    );
  }
}

export default TodoList;
