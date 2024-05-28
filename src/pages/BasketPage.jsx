import React from 'react'
import { useSelector } from 'react-redux'

const BasketPage = () => {
    const basket = useSelector((state) => state.cards.cards)
    console.log(basket)
    return (
        <div>
            <ul className="products">
                {basket.map((item) => (
                    <li key={item.id}>
                        {item.name} - {item.price}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BasketPage
