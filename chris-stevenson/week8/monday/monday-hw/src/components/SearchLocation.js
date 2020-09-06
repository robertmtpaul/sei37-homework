import React from 'react';
import axios from 'axios';


class SearchLocation extends React.Component{

  state = {
    results: []
  }

  componentDidMount(){
    axios.get(`https://api.openaq.org/v1/measurements?location=${this.props.match.params.query}`)
    .then(data => {
      console.log(data);
      this.setState({results: data.data.results})
    })
    .catch(err => console.log(err));
  }

  render(){
    return(
      <div>
        <table>
          <tr>
            <td>Location</td>
            <td>Measurements</td>
            <td>Coordinates</td>
            <td>Date</td>
          </tr>
          {
            this.state.results.map(result => (
              <tr>
                <td>{result.location}</td>
                <td>{result.parameter}: {result.value}{result.unit}</td>
                <td>Lat:{result.coordinates.latitude}, Long:{result.coordinates.longitude}</td>
                <td>{result.date.local}</td>
              </tr>
            ))
          }
        </table>
      </div>
    );
  }//render

}//SearchLocation

export default SearchLocation
