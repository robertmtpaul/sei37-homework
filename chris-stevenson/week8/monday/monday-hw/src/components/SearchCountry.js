import React from 'react';
import axios from 'axios';


class SearchCountry extends React.Component{

  state = {
    results: []
  }

  componentDidMount(){
    axios.get(`https://api.openaq.org/v1/measurements?country=${this.props.match.params.query}`)
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
            <td>City</td>
            <td>Location</td>
            <td>Measurements</td>
            <td>Date</td>
          </tr>
          {
            this.state.results.map(result => (
              <tr>
                <td>{result.city}</td>
                <td>{result.location}</td>
                <td>{result.parameter}: {result.value}{result.unit}</td>
                <td>{result.date.local}</td>
              </tr>
            ))
          }
        </table>
      </div>
    );
  }//render

}//SearchResult

export default SearchCountry
