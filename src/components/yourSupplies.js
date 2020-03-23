import React from 'react'
import SupplyCard from './supplyCard'
import './yourSupplies.css'

export default class yourSupplies extends React.Component {

    state = {
        cash: 50,
        supplies: [{
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
        }]
    }

    createSupplyCards = (supplies) => {
        return supplies.map( supply => {
            return <SupplyCard supply={supply} handleClick={this.removeSupply}/>
        })
    }

    removeSupply = (supply) => {
        this.setState({supplies: this.state.supplies.filter( mysupply => mysupply !== supply)})
    }

    render() {
        return(
            <div id="your-supplies">
                <h2>Your Supplies</h2>
                <h3>Remaining Cash: {this.state.cash}</h3>
                <div id="your-supply-inventory">
                    {this.createSupplyCards(this.state.supplies)}
                </div>
            </div>
        );
    }
}