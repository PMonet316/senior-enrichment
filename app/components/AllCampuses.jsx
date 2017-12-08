import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'


export default class AllCampuses extends Component {
  constructor() {
    super();
    this.state = {
      campuses: [],
      selectedCampus: []
    }
  }


  componentDidMount(){
    axios.get("api/campuses")
    .then(res => res.data)
    .then(campuses => this.setState({ campuses }));
    }



  render() {

    const campuses = this.state.campuses;

    return (
      <div>
        <div>
          <h3>Campuses</h3>
        </div>
        <div className="row">
          <div className="col s12 m7">
            {
              campuses.map(campus => {
                return (
                  <div key={campus.id} className="card">
                    <Link to={`/campuses/${campus.id}`}>
                    <div className="card-image">
                    <img src="https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/37912591295_7c30a77efd_o.jpg" />
                    </div>
                      <div>
                        <span className="card-title">{campus.name}</span>
                      </div>
                    </Link>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )};
}


{/*
<div class="row">
<div class="col s12 m7">
  <div class="card">
    <div class="card-image">
      <img src={campuses.imageUrl>
      <span class="card-title">{campuses.name}</span>
    </div>
    <div class="card-content">
      <p>I am a very simple card. I am good at containing small bits of information.
      I am convenient because I require little markup to use effectively.</p>
    </div>
    <div class="card-action">
      <a href="#">This is a link</a>
    </div>
  </div>
</div>
</div>
      */}
