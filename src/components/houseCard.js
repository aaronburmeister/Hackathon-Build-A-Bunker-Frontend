import React, { Component } from 'react';
const disasterApi = 'http://localhost:3000/disasters'

class houseCard extends Component {

    state = {
        disasters: ""
    }

componentDidMount(){
  fetch(disasterApi)
    .then(response => response.json())
    .then(results => this.setState({disasters: results}))


}

    render() {

        return(
          <>
            <img className="house" src={require ("../image/house.png")}/>

          </>
        )
    }
}

export default houseCard;
