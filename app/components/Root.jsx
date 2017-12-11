import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect, Link } from 'react-router-dom';
import Header from './Header';
import AllCampuses from './AllCampuses';
import AllStudents from './AllStudents';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import AddNewCampus from './AddNewCampus';
import AddNewStudent from './AddNewStudent';
import EditStudent from './EditStudent';
import EditCampus from './EditCampus';
import Home from './Home'




/* The code below does NOT relate to your project.
   This code is just a nice BIG example of how you can make a component.
   Also it is HILARIOUS :D Have fun!
 */




export default class Main extends React.Component {



  render() {

    return (
      <Router>
        <div>
          <div>
            <Header />
          </div>
          <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/campuses" component={AllCampuses} />
            <Route exact path="/campuses/:campusId" component={SingleCampus} />
            <Route exact path="/students" component={AllStudents} />
            <Route exact path="/students/:studentId" component={SingleStudent} />
            <Route exact path="/AddNewCampus" component={AddNewCampus} />
            <Route exact path="/AddNewStudent" component={AddNewStudent} />
            <Route exact path="/students/:studentId/edit" component={EditStudent} />
            <Route exact path="/campuses/:campusId/edit" component={EditCampus} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="*" component={Home} />
          </Switch>
          </div>
        </div>
      </Router>
    )
  }
}


