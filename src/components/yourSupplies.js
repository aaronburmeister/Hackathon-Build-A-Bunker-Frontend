import React from 'react'
import SupplyCard from './supplyCard'
import './yourSupplies.css'

export default function yourSupplies (props) {

    const { supplies, cash, saveBunker } = props;
    const removeSupply = props.handleClick;

    const createSupplyCards = (supplies) => {
        return supplies.map( supply => {
            return <SupplyCard supply={supply} handleClick={removeSupply}/>
        })
    }

    return(
        <div id="your-supplies">
            <h2>Your Supplies</h2>
            <h3>Remaining Cash: {cash}</h3>
            <div id="your-supply-inventory">
                {createSupplyCards(supplies)}
            </div>
            <button onClick={() => saveBunker()}>Save</button>
        </div>
    );
}