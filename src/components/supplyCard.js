import React from 'react'
import './supplyCard.css'

export default function supplyCard(props) {
    const { supply } = props

    return(
        <div className="supply-card" onClick={() => props.handleClick(supply)}>
            <h3>{supply.name}</h3>
            <h4>Cost: {supply.cost}</h4>
            <h4>Value: {supply.value}</h4>
        </div>
    );

}