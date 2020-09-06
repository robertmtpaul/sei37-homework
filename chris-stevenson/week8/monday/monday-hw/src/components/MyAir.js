import React from 'react';
import axios from 'axios';
import GoogleMapReact from 'google-map-react';




class MyAir extends React.Component{


  state = {
    result: {
      date: '',
      coordinates: ''
    },
    center: {lat: 0, lng: 0},
    zoom: 11
  }

  componentDidMount(){
    let map;
    let infoWindow;
    navigator.geolocation.getCurrentPosition((position) => {
      const myLat = position.coords.latitude;
      const myLong = position.coords.longitude;
      this.setState({center: {lat: myLat, lng: myLong}})
      axios.get(`https://api.openaq.org/v1/measurements?coordinates=${myLat},${myLong}&radius=10000`)
      .then(data => {
        console.log(data.data.results[0]);
        this.setState({result: data.data.results[0]});
        this.setState({zoom: 11});
      })
      .catch(err => console.log(err));

    }); //navigator

  }

  render(){


    return(
      <div>
        <h1>City: {this.state.result.city}</h1>
        <h3>Measurements Taken</h3>
        <p>Date: {this.state.result.date.local}</p>
        <h4>{this.state.result.parameter}: {this.state.result.value}{this.state.result.unit}</h4>
        <h3>Coordinates</h3>
        <p>Latitude: {this.state.result.coordinates.latitude}</p>
        <p>Longitude: {this.state.result.coordinates.longitude}</p>
        {
          this.state.center.lat && (
            <div style={{ height: '30vh', width: '50vh' }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDMKCpjk0syNql3LikE4VEvny39AM1p3xc' }}
                defaultCenter={this.state.center}
                defaultZoom={this.state.zoom}
                >
              </GoogleMapReact>
            </div>
          )
        }

      </div>
    );
  }//render
}




export default MyAir
