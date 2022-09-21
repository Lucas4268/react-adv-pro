import { useState } from "react"
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import { Product } from '../interfaces/interfaces'
import '../styles/custom-styles.css'

const product = {
  id: '1',
  title: 'Coffe Mug',
  img: './coffee-mug.png'
}

const product2 = {
  id: '1',
  title: 'Coffe Mug 2',
  img: './coffee-mug2.png'
}

const products: Product[] = [ product, product2 ]

// interface ShoppingCartProduct extends Product {
//   count: number;
// }

export const ShoppingPage = () => {
  // const [ shoppingCart, setShoppingCart ] = useState<{ [key: string]: ShoppingCartProduct }>({})

  return (
    <div>
      <h1>ShoppingPage</h1>

      <hr />
      
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
      }}>

        <div className="shopping-cart">
          {
            [1, 2].map((p, i) => (
              <ProductCard key={ product.id } product={ product } className='algo'>
                <ProductCard.Image />
                <ProductCard.Buttons />
              </ProductCard>
            ))
          }

        </div>
        {/* <ProductCard product={ product }>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>

        <ProductCard className='bg-dark' product={ product }>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard> */}

        {
          products.map( product => (
            <ProductCard key={ product.id } product={ product } styles={{
              backgroundColor: '#544569'
            }}>
              <ProductCard.Image />
              <ProductCard.Title />
              <ProductCard.Buttons />
            </ProductCard>
          ))
        }
      </div>
    </div>
  )
}