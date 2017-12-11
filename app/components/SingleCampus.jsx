import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { fetchSelectedCampus} from '../reducers/selectedCampus'
import { connect } from 'react-redux'



class SingleCampus extends Component {




  componentDidMount(){
    this.props.setCampus(this.props.match.params.campusId);
    }


  render() {
    const campus = this.props.selectedCampus;
    return (
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
        </div>
        <h2>{campus.name}</h2>
        <p>Campus ID:  {campus.id}</p>
        <p>{campus.description}</p>
        <ul>
          {
            campus.students &&
              campus.students.map((student, index) => (
                <div key={student.id} className="card">
                  <Link to={`/students/${student.id}`} key={student.id}>
                    <li>{student.firstName} {student.lastName}</li>
                  </Link>
                </div>
              ))
          }
        </ul>
        <ul>
        <Link to={`/AddNewStudent`}>
        <button className="btn waves-effect waves-light">Add New Student</button>
        </Link>
        </ul>
        <ul>
        <Link to={`/campuses/${campus.id}/edit`}>
          <button className="btn waves-effect waves-light">Edit Campus</button>
        </Link>
        </ul>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    selectedCampus: state.selectedCampus
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setCampus: (campusId) => {
       dispatch(fetchSelectedCampus(campusId));
    }
  }
}

const SingleCampusContainer = connect(mapStateToProps, mapDispatchToProps)(SingleCampus)

export default SingleCampusContainer;
