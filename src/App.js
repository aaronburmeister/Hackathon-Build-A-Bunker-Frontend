import React, {Component} from 'react';
import './App.css';
import enviromentSetup from './enviromentSetup'
import UserSignup from './components/UserSignup'
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
      <enviromentSetup />
      <addOn />

    </div>
  );
}

}

export default App;
