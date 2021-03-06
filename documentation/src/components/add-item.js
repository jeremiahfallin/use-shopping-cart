import React from 'react'
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart'

export function AddItem({ product }) {
  const { addItem } = useShoppingCart()

  /* A helper function that turns the price into a readable format */
  const price = formatCurrencyString({
    value: product.price,
    currency: product.currency,
    language: 'en-US'
  })
  return (
    <article
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%'
      }}
    >
      <figure style={{ textAlign: 'center' }}>
        <img
          style={{ height: 200, width: 250 }}
          src={product.image}
          alt={` ${product.name}`}
        />
        <figcaption>{product.name}</figcaption>
      </figure>
      <p>{price}</p>
      {/* Adds the item to the cart */}
      <section
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          width: '100%'
        }}
      >
        <button
          onClick={() => addItem(product)}
          aria-label={`Add ${product.name} to your cart`}
          style={{ height: 50, width: 100, marginBottom: 30 }}
        >
          Add to cart
        </button>
        <button
          onClick={() => addItem(product, 10)}
          aria-label={`Add 10 ${product.name} to your cart`}
          style={{ height: 50, width: 100, marginBottom: 30 }}
        >
          Add 10 to cart
        </button>
      </section>
    </article>
  )
}

export default AddItem
