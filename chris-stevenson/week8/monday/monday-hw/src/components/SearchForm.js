import React from 'react';
import axios from 'axios';


class SearchForm extends React.Component{

  state = {
    countries: [],
    cities: [],
    locations: [],
    country: '',
    city: '',
    location: ''
  }

  componentDidMount(){
    axios.get('https://api.openaq.org/v1/countries')
    .then(data => {
      this.setState({countries: data.data.results})
    })
    .catch(err => console.log(err));
  }

  requestCities = (ev) => {
    this.setState({country: ev.target.value});
    axios.get(`https://api.openaq.org/v1/cities?country=${ev.target.value}`)
    .then(data => {
      this.setState({cities: data.data.results})
    })
    .catch(err => console.log(err));
  }

  requestLocations = (ev) => {
    this.setState({city: ev.target.value});
    axios.get(`https://api.openaq.org/v1/locations?city=${ev.target.value}`)
    .then(data => {
      this.setState({locations: data.data.results})
    })
    .catch(err => console.log(err));
  }

  setLocation = (ev) => {
    this.setState({location: ev.target.value})
  }

  handleSubmit = (ev) => {
    let path;
    if(this.state.location != ''){
      path = `/search/location/${this.state.location}`
    } else if (this.state.city != '') {
      path = `/search/city/${this.state.city}`
    } else {
      path = `/search/country/${this.state.country}`
    }
    this.props.history.push(path);
    ev.preventDefault();
  }

  render(){
    return(
      <div>
        <h1>Air Quality Tracker</h1>
        <form onSubmit={this.handleSubmit}>
          <h3>Country:</h3>
          <select onChange={this.requestCities}>
            <option disabled selected>Please Select Country</option>
            {
              this.state.countries.map(country => <option value={country.code}>{country.name}</option>)
            }
          </select>
          <h3>City</h3>
          <select onChange={this.requestLocations}>
            <option disabled selected>Please Select City</option>
            {
              this.state.cities.map(city => <option value={city.code}>{city.name}</option>)
            }
          </select>
          <h3>Location</h3>
          <select onChange={this.setLocation}>
            <option disabled selected>Please Select Location</option>
            {
              this.state.locations.map(location => <option value={location.location}>{location.location}</option>)
            }
          </select>
          <br/>
          <br/>
          <input type='submit' value='Search'/>
        </form>
      </div>
    );
  }

}//class SearchForm

export default SearchForm;
