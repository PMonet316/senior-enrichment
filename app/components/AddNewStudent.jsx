import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createNewStudent } from '../reducers/students';
import { fetchCampuses } from '../reducers/campuses';
import {  Redirect } from 'react-router-dom';



class AddNewStudent extends Component{
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      gpa: 0,
    }


    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputFirstName = this.inputFirstName.bind(this);
    this.inputLastName = this.inputLastName.bind(this);
    this.inputEmail = this.inputEmail.bind(this);
    this.inputGpa = this.inputGpa.bind(this);
  }

  componentDidMount () {
    if (!this.props.campuses.length){
      this.props.loadCampuses();
    }
  }

  inputFirstName(e){
    this.setState({
      firstName: e.target.value
    })
  }

  inputLastName(e){
    this.setState({
      lastName: e.target.value
    })
  }

  inputEmail(e){
    this.setState({
      email: e.target.value
    })
  }

  inputGpa(e){
    this.setState({
      gpa: e.target.value
    })
  }


  handleSubmit(e){
    e.preventDefault();
    this.props.createStudent(this.state.firstName, this.state.lastName, this.state.email, this.state.gpa);
    <Redirect from='/AddNewStudent' to="/students" />
  }

  render(){

    const campuses = this.props.campuses;

    return(
      <div>
      <h1>Add New Student</h1>
      <div className="row">
      <form onSubmit={this.handleSubmit} className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <input value={this.state.firstName} onChange={this.inputFirstName} type="text" placeholder="First Name" className="validate" />
          </div>
          <div className="input-field col s6">
          <input value={this.state.lastName} onChange={this.inputLastName} type="text" placeholder="Last Name" className="validate" />
          </div>
        </div>
        <div className="row">
        <div className="input-field col s12">
        <input value={this.state.gpa} onChange={this.inputGpa} type="text" placeholder="Your Current GPA" className="validate" />
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
        <input value={this.state.email} onChange={this.inputEmail} type="text" placeholder="Email" className="validate" />
        </div>
      </div>
        <button className="btn waves-effect waves-light" type="submit">Add New Student</button>
      </form>
    </div>
    </div>

    )
  }
}

const mapStateToProps = state => {
  return {
    campuses: state.campuses
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadCampuses: () => {
       dispatch(fetchCampuses());
    },
    createStudent: (firstName, lastName, email, gpa) => {
      dispatch(createNewStudent(firstName, lastName, email, gpa))
    }
  }
}

const AddStudentContainer = connect(mapStateToProps, mapDispatchToProps)(AddNewStudent)

export default AddStudentContainer;
