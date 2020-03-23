
import React, {Component} from 'react';
import './App.css';

import HouseCard from './components/houseCard'
import UserSignup from './components/UserSignup'
import SupplyPage from './components/supplyPage'
// import addOn from './addOn'

const apiUrl = 'http://localhost:3001/users'

class App extends React.Component {
  state = {
    house: [],
    addons: [],
    disaters: []
  }

  componentDidMount(){
    fetch(apiUrl)
      .then(response => response.json())
  }

render() {
  return (
    <div className='enviroment'>
      <h1 className="title">Build-ABunker</h1>
      <UserSignup />
      <addOn />
      <SupplyPage />
      <HouseCard />
    </div>
  );
}

}

export default App;
