import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { fetchCampuses, deleteCampusThunk } from '../reducers/campuses'
import { connect } from 'react-redux'


class Home extends Component {


    componentDidMount () {
      this.props.loadCampuses();
    }



  render() {

    const campuses = this.props.campuses;
    return (
      <div>
        <div>
          <h3>Campuses</h3>
          <Link to={`/addNewCampus`}>
          <button className="btn waves-effect waves-light">Add New Campus</button>
       </Link>
        </div>
        <div className="row">

            {
              campuses.map(campus => {
                return (
                  <div key={campus.id} className="col s12 m7">
                  <div  className="card">
                    <Link to={`/campuses/${campus.id}`}>
                    <div className="card-image">
                    <img src="https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/37912591295_7c30a77efd_o.jpg" />
                    </div>
                      <div>
                        <span className="card-title">{campus.name}</span>
                      </div>
                    </Link>
                    <div>
                      <button className="btn waves-effect waves-light" onClick={() => this.props.removeCampus(campus.id)}>
                      Delete Campus
                    </button>
                  </div>
                  </div>
                  </div>
                )
              })
            }

        </div>
      </div>
    )};
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
    removeCampus: (campusId) => {
      dispatch(deleteCampusThunk(campusId))
    }
  }
}

const CampusesContainer = connect(mapStateToProps, mapDispatchToProps)(Home)

export default CampusesContainer;



