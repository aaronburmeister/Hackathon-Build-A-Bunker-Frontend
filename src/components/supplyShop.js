import React from 'react'
import SupplyCard from './supplyCard'
import './supplyShop.css'

export default function supplyShop() {

    const supplies = [{
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

    const createSupplyCards = (supplies) => {
        return supplies.map( supply => {
            return <SupplyCard supply={supply} />
        })
    }

    return(
        <div id="supply-shop">
            <h2>Supply Shop</h2>
            <div id="supply-inventory">
                {createSupplyCards(supplies)}
            </div>
        </div>
    );
}