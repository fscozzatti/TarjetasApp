import React, { Component } from 'react';

class TodoForm extends Component{
  constructor() {
    super();
    this.state = {
      title:'',
      responsible:'',
      descriton:'',
      priority:''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e){
    const { value, name } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onAddTodo(this.state);
  }

  render(){
    return(
      <div className="card">
        <form className="card-body" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type='text'
              name='title'
              onChange={this.handleInput}
              className='form-control'
              placeholder='Titulo'
              />
          </div>
          <div className="form-group">
          <select
            name='responsible'
            className='form-control'
            onChange={this.handleInput}
            >
              <option>Marc</option>
              <option>Franco</option>
            </select>
          </div>
          <div className="form-group">
            <input
              type='text'
              name='descriton'
              onChange={this.handleInput}
              className='form-control'
              placeholder='Descripción'
              />
          </div>
          <div className="form-group">
            <select
              name='priority'
              className='form-control'
              onChange={this.handleInput}
              >
                <option>baja</option>
                <option>media</option>
                <option>alta</option>
              </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Agregar
          </button>
        </form>
      </div>
    )
  }

}

export default TodoForm;
