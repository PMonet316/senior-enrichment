import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { fetchCampuses, deleteCampusThunk } from '../reducers/campuses'
import { connect } from 'react-redux'


class AllCampuses extends Component {


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
                  <div key={campus.id} className="col s6 m7">
                  <div  className="card horizontal">
                    <Link to={`/campuses/${campus.id}`}>
                    <div className="card-image">
                    <img src="https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/37912591295_7c30a77efd_o.jpg" />
                    </div>
                      <div>
                        <h2><span className="card-stacked">{campus.name}</span></h2>
                      </div>
                    </Link>
                    <div className="card-content">
                    <p>{campus.description}</p>
                    <div>
                    <div className="btn waves-effect waves-light chip" onClick={() => this.props.removeCampus(campus.id)}>
                      Delete Campus
                    </div>
                  </div>
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

const CampusesContainer = connect(mapStateToProps, mapDispatchToProps)(AllCampuses)

export default CampusesContainer;



