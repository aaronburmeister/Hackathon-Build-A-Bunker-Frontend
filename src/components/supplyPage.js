import React from 'react'
import SupplyShop from './supplyShop'
import YourSupplies from './yourSupplies'

export default class supplyPage extends React.Component {

    state = {
        cash: 50,
        yourSupplies: [{
            name: "12 Rolls of Toilet Paper",
            cost: 12,
            value: 2
        }, {
            name: "Iron Roof",
            cost: 2500,
            value: 8
        }, {
            name: "AR-15",
            cost: 350,
            value: 4
        }],
        storeSupplies: [{
            name: "12 Rolls of Toilet Paper",
            cost: 12,
            value: 2
        }, {
            name: "Iron Roof",
            cost: 2500,
            value: 8
        }, {
            name: "Thatched Roof",
            cost: 300,
            value: 6
        }, {
            name: "12 Cans of Tuna",
            cost: 25,
            value: 2
        }, {
            name: "AR-15",
            cost: 350,
            value: 4
        }]
    }

    addSupply = (supply) => {
        console.log("add supply!")
        this.setState({yourSupplies: [...this.state.yourSupplies, supply]})
    }

    removeSupply = (supply) => {
        console.log("remove supply!")
        this.setState({yourSupplies: this.state.yourSupplies.filter( mysupply => mysupply !== supply)})
    }

    render() {
        return (
        <div id="supply-page">
            <YourSupplies supplies={this.state.yourSupplies} handleClick={this.removeSupply} cash={this.state.cash}/>
            <SupplyShop supplies={this.state.storeSupplies} handleClick={this.addSupply}/>
        </div>
        );
    }
}