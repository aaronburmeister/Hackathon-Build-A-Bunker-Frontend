import React from 'react'
import SupplyShop from './supplyShop'
import YourSupplies from './yourSupplies'

export default class supplyPage extends React.Component {

    state = {
        cash: 5000,
        yourSupplies: [],
        storeSupplies: [],
        weapon: 0,
        food: 0,
        shelter: 0,
        health: 0
    }

    componentDidMount() {
        fetch('http://localhost:3000/supplies')
            .then(response => response.json())
            .then(result => {
                this.setState({ storeSupplies: result })
            })
    }

    addSupply = (supply) => {
        if (this.state.cash - supply.cost >= 0 && !this.state.yourSupplies.includes(supply)) {
            this.setState({
                cash: this.state.cash - supply.cost,
                yourSupplies: [...this.state.yourSupplies, supply],
                [supply.category]: this.state[supply.category] + supply.value
            })
        }
    }

    removeSupply = (supply) => {
        this.setState({
            cash: this.state.cash + supply.cost,
            yourSupplies: this.state.yourSupplies.filter( mysupply => mysupply.id !== supply.id),
            [supply.category]: this.state[supply.category] - supply.value
        })
    }

    saveBunker = () => {
        console.log("You saved your bunker!")
        // bunker = this.props.bunker
        // this.state.yourSupplies.forEach( supply => {
        //     fetch(`http://localhost:3000/bunkerSupplies/${this.props.bunker.id}`, {
        //         "Method": "POST",
        //         "Headers": {
        //             "Content-Type": "application/json"
        //         },
        //         "Body": JSON.stringify({bunker, supply})
        //     })
        // })
    }

    render() {
        return (
        <div id="supply-page">
            <YourSupplies 
                supplies={this.state.yourSupplies} 
                handleClick={this.removeSupply} 
                cash={this.state.cash}
                saveBunker={this.saveBunker} />
            <SupplyShop supplies={this.state.storeSupplies} handleClick={this.addSupply}/>
        </div>
        );
    }
}