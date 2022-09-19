import { createContext } from 'react';

import { ProducContextProps, ProductCardProps } from '../interfaces/interfaces';
import { useProduct } from '../hooks'
import styles from '../styles/styles.module.css'


export const ProductContext = createContext({} as ProducContextProps);
const { Provider } = ProductContext

export const ProductCard = ({ children, product }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct()

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={ styles.productCard }>
        { children }
      </div>
    </Provider>
  )
}
