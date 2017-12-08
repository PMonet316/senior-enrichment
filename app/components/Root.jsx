import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect } from 'react-router-dom';
import Header from './Header';
import AllCampuses from './AllCampuses';
import AllStudents from './AllStudents';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent'




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
            <Route exact path="/" component={AllCampuses} />
            <Route exact path="/campuses" component={AllCampuses} />
            <Route path="/campuses/:campusId" component={SingleCampus} />
            <Route exact path="/students" component={AllStudents} />
            <Route path="/students/:studentId" component={SingleStudent} />
            {/*<AllCampuses selectCampus={this.selectCampus} {...this.state} />
            <SingleCampus campus={this.state.selectedCampus} />
            <AllStudents selectStudent={this.selectStudent} {...this.state}/>
    <SingleStudent student={this.state.selectedStudent} />*/}
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
