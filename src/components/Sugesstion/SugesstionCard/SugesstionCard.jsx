import React from 'react'

import {suggestiondata} from  '../../../db/data' 

const renderCard = (card, i)=>{
    return (
        <div className="smallCard" key={i}>
            <div className="img " >
                <img src={card.img} alt="" />
            </div>
            <div className="title">
                <p>{card.title}</p>
            </div>
        </div>
    )
}

const SugesstionCard = () => {
    return (
        <div className="cards">
            {
                suggestiondata && suggestiondata.map(renderCard)
            }
        </div>
    )
}



export default SugesstionCard