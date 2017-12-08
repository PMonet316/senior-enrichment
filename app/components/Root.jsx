import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect } from 'react-router-dom';
import Header from './Header';
import AllCampuses from './AllCampuses';
import AllStudents from './AllStudents';
import SingleCampus from './SingleCampus';
import axios from 'axios'



/* The code below does NOT relate to your project.
   This code is just a nice BIG example of how you can make a component.
   Also it is HILARIOUS :D Have fun!
 */




export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      campuses: [],
      selectedCampus: [],
      students: []
    }

    this.selectCampus = this.selectCampus.bind(this)
  }

  componentWillMount(){
    axios.get("api/campuses")
    .then(res => res.data)
    .then(campuses => this.setState({ campuses }));
    }

  componentDidMount(){
      axios.get("api/students")
      .then(res => res.data)
      .then(students => this.setState({ students }));
      }

selectCampus(campusId) {
  console.log("IS THIS CLICKED?")
  axios.get(`/api/campuses/${campusId}`)
  .then(res => res.data)
  .then(campus => this.setState({ selectedCampus: campus }))

}


  render() {

    return (
      <Router>
        <div>
          <div>
            <Header />
          </div>
          <div>
            <AllCampuses selectCampus={this.selectCampus} {...this.state} />

            <AllStudents {...this.state}/>
          </div>
        </div>
      </Router>
    )
  }
}


{/*<Switch>
<Route exact path="/students" component={AllStudents} />
<Route exact path="/campuses" component={AllCampuses} />
</Switch>*/}
