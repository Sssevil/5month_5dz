import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const ProductsPage = () => {
    const products = useSelector((state) => state.products.products)
    const cards = useSelector((state) => state.cards.cards)
    const dispatch = useDispatch()

    const addToBasket = (id, name, price) => {
        dispatch({ type: 'BASKET_COUNTER' })
        dispatch({ type: 'ADD_CARD', payload: { id, name, price } })
    }
    return (
        <div>
            <ul className="products">
                {products.map((product) => (
                    <li key={product._id}>
                        {product.name} - {product.price}
                        <button
                            onClick={() =>
                                addToBasket(
                                    product._id,
                                    product.name,
                                    product.price,
                                )
                            }
                            disabled={cards
                                .map((card) => card.id)
                                .includes(product._id)}
                        >
                            {cards.map((card) => card.id).includes(product._id)
                                ? 'in basket'
                                : 'buy'}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductsPage
