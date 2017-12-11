import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createCampusThunk } from '../reducers/campuses';


class AddCampus extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      imageUrl: '',
      description: ''
    }


    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputName = this.inputName.bind(this);
    this.inputUrl = this.inputUrl.bind(this);
    this.inputDescription = this.inputDescription.bind(this);
  }

  inputName(e){
    this.setState({
      name: e.target.value
    })
  }

  inputUrl(e){
    this.setState({
      imageUrl: e.target.value
    })
  }

  inputDescription(e){
    this.setState({
      description: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.submitCampus(this.state.name, this.state.imageUrl, this.state.description);
  }

  render(){
    return(
      <div>
      <h1>Create New Campus</h1>
      <div className="row">
      <form onSubmit={this.handleSubmit} className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <input value={this.state.name} onChange={this.inputName} type="text" placeholder="Campus Name" className="validate" />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
          <input value={this.state.imageUrl} onChange={this.inputUrl} type="text" placeholder="Image Url" className="validate" />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
          <input value={this.state.description} onChange={this.inputDescription} type="text" placeholder="Campus Description" className="validate" />
          </div>
        </div>
        <button className="btn waves-effect waves-light" type="submit">Create Campus</button>
      </form>
    </div>
    </div>

    )}
}

const mapDispatchToProps = dispatch => {
  return{
    submitCampus: (name, imageUrl, description) => {
      dispatch(createCampusThunk(name, imageUrl, description))
    }
  }
}

const AddCampusContainer = connect(null, mapDispatchToProps)(AddCampus)

export default AddCampusContainer;
