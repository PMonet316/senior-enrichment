import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

export default class AllStudents extends Component {


  render() {
    return (
      <div>
        <h3>Students</h3>
          <div className="col s12 m7">
          {
            this.props.students.map(student => {
              return (
                <div key={student.id} className="card">
                  <a onClick="">
                  <div className="card-image">
                  </div>
                    <div>
                      <span className="card-title">{student.name}</span>
                    </div>
                  </a>
                </div>
              )
            })
          }
        </div>
      </div>

    )};
}
