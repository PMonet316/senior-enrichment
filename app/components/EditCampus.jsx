import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { connect } from 'react-redux'
import { updateCampusThunk } from '../reducers/campuses';
import { fetchAllStudents } from '../reducers/students';
import { fetchSelectedCampus } from '../reducers/selectedCampus'

class EditCampus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      imageUrl: '',
      description: '',
      studentId: 0
    }

    this.inputName = this.inputName.bind(this);
    this.inputImageUrl = this.inputImageUrl.bind(this);
    this.inputDescription = this.inputDescription.bind(this);
    this.inputStudentIds = this.inputStudentIds.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  componentDidMount(){
    if (!this.props.students.length){
      this.props.loadStudents();
    }
    this.props.loadSelectedCampus(Number(this.props.match.params.campusId))
  }

  inputName(e){
    this.setState({
      name: e.target.value
    })
  }

  inputImageUrl(e){
    this.setState({
      imageUrl: e.target.value
    })
  }

  inputDescription(e){
    this.setState({
      description: e.target.value
    })
  }

  inputStudentIds(e){
    this.setState({
      studentId: Number(e.target.value)
    })
  }

  handleSubmit(e){
    e.preventDefault();
    const updatedCampus = {};
    const state = Object.assign({}, this.state);
    Object.keys(state).forEach(key => {
      if (state[key]){
        updatedCampus[key] = state[key];
      }
    })
    updatedCampus.id = Number(this.props.match.params.campusId);
    this.props.updateCampus(updatedCampus);
    this.setState({
      name: '',
      imageUrl: '',
      description: '',
      studentId: 0,
    })
  }


  render(){

        const campus = this.props.selectedCampus;
        const students = this.props.students;
        console.log("STATE: ", this.state)
        return(
          <div>
          <h1>Edit {campus.name}</h1>
          <div className="row">
          <form onSubmit={this.handleSubmit} className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input value={this.state.name} onChange={this.inputName} type="text" placeholder={campus.name} className="validate" />
              </div>
              <div className="input-field col s6">
              <input value={this.state.imageUrl} onChange={this.inputImageUrl} type="text" placeholder={campus.imageUrl} className="validate" />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
              <input value={this.state.description} onChange={this.inputDescription} type="text" placeholder={campus.description} className="validate" />
              </div>
              <div className="input-field col s12">
              <input value={this.state.studentId} onChange={this.inputStudentIds} type="text" placeholder="something" className="validate" />
              </div>
          </div>
            <button className="btn waves-effect waves-light" type="submit">Update Campus</button>
          </form>
        </div>
        </div>
        )
      }
    }

const mapDispatchToProps = dispatch => {
  return {
    loadStudents: () => {
      dispatch(fetchAllStudents());
    },
    updateCampus: campus => {
      dispatch(updateCampusThunk(campus))
    },
    loadSelectedCampus: (campusId) => {
      dispatch(fetchSelectedCampus(campusId))
    }
  }
}

const mapStateToProps = state => {
  return {
    students: state.students,
    selectedCampus: state.selectedCampus
  }
}

const EditCampusContainer = connect(mapStateToProps, mapDispatchToProps)(EditCampus)

export default EditCampusContainer;
