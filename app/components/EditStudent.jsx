import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { connect } from 'react-redux'
import { updateStudentThunk } from '../reducers/students';
import { fetchCampuses } from '../reducers/campuses';
import { fetchSelectedStudent } from '../reducers/selectedStudent'



class EditStudent extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      gpa: 0,
      campusId: 0
    }


    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputFirstName = this.inputFirstName.bind(this);
    this.inputLastName = this.inputLastName.bind(this);
    this.inputEmail = this.inputEmail.bind(this);
    this.inputGpa = this.inputGpa.bind(this);
    this.inputCampusId = this.inputCampusId.bind(this);
  }

  componentDidMount () {
    if (!this.props.campuses.length){
      this.props.loadCampuses();
    }
    this.props.loadSelectedStudent(Number(this.props.match.params.studentId));
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
      gpa: Number(e.target.value)
    })
  }

  inputCampusId(e){
    this.setState({
      campusId: Number(e.target.value)
    })
  }

  handleSubmit(e){
    e.preventDefault();
    const updatedStudent = {};
    const state = Object.assign({}, this.state);
    Object.keys(state).forEach((key) => {
      if (state[key]){
        updatedStudent[key] = state[key];
      }
    })
    updatedStudent.id = Number(this.props.match.params.studentId);
    this.props.updateStudent(updatedStudent);
    this.setState({
      firstName: '',
      lastName: '',
      campusId: 0,
      email: '',
      gpa: 0,
    });
  }

  render(){

    const student = this.props.selectedStudent;
    const studentGpa = Number(student.gpa)
    const campuses = this.props.campuses;
    {console.log("PROPS: ", studentGpa)}
    return(
      <div>
      <h1>Edit {student.name}</h1>
      <div className="row">
      <form onSubmit={this.handleSubmit} className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <input value={this.state.firstName} onChange={this.inputFirstName} type="text" placeholder={student.firstName} className="validate" />
          </div>
          <div className="input-field col s6">
          <input value={this.state.lastName} onChange={this.inputLastName} type="text" placeholder={student.lastName} className="validate" />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
          <input value={this.state.campusId} onChange={this.inputCampusId} type="text" placeholder={student.campusId} className="validate" />
          </div>
        <div className="input-field col s6">
        <input value={this.state.gpa} onChange={this.inputGpa} type="text" placeholder={student.studentGpa} className="validate" />
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
        <input value={this.state.email} onChange={this.inputEmail} type="text" placeholder={student.email} className="validate" />
        </div>
      </div>
        <button className="btn waves-effect waves-light" type="submit">Update Student</button>
      </form>
    </div>
    </div>

    )
  }
}

const mapStateToProps = state => {
  return {
    campuses: state.campuses,
    selectedStudent: state.selectedStudent
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadCampuses: () => {
       dispatch(fetchCampuses());
    },
    updateStudent: (student) => {
      dispatch(updateStudentThunk(student))
    },
    loadSelectedStudent: (studentId) => {
      dispatch(fetchSelectedStudent(studentId))
    }
  }
}

const EditStudentContainer = connect(mapStateToProps, mapDispatchToProps)(EditStudent)

export default EditStudentContainer;


















