import React, { useState, useCallback } from 'react'
// import { PiHeartLight } from "react-icons/pi"
import { AiFillStar ,AiTwotoneHeart } from "react-icons/ai"

import './ProductCard.scss'

const Card = ({ item }) => {
    // const rating = item.rating;
    // console.log(rating)
    const [toggleHeart, setToggleHeart] = useState(false);
    const changeColor = useCallback(() => {
        setToggleHeart(!toggleHeart)
    }, [toggleHeart])
    return (
        <div className='card'>
            <div className='like'>
                <AiTwotoneHeart  className={toggleHeart ? 'heart active' : 'heart'} onClick={changeColor} />
            </div>
            <div className='image-container'>
            <img src={item.img} alt={item.title} className="card-img" />
            <div className="overlay">View Product</div>
            </div>
            <div className="card-details">
                <h3 className="card-title">{item.title}</h3>
                <section className="card-price">
                    <div className="price">
                        <span className='oldPrice' >Rs.{item.actualPrice}</span><span className='newPrice'>Rs.{item.actualPrice} </span>
                    </div>
                </section>
                <section className="card-reviews">
                    {[...Array(item.rating)].map((_, index) => (
                        <div className="" key={index}>
                            <AiFillStar  className='rating-star'/>                        
                        </div>
                    ))}

                    <span className="total-reviews">({item.userVoted})</span>
                </section>
            </div>

        </div>
    )
}

const ProductCard = ({ data }) => {
    return (
        <>
            <div className="card-container">
                {data.length ? data.map((item) => (
                    <Card key={item.id} item={item} />
                )) : <div className="empty">
                    <h2>Sorry!. No content Found</h2>
                </div>}
            </div>
        </>
    )
}

export default ProductCard