import React from 'react'
import SupplyCard from './supplyCard'
import './supplyShop.css'

export default function supplyShop(props) {

    const { supplies } = props
    const addSupply = props.handleClick

    const createSupplyCards = (supplies) => {
        return supplies.map( supply => {
            return <SupplyCard supply={supply} handleClick={addSupply}/>
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