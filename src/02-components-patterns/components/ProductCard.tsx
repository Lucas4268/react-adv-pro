import { createContext, ReactElement } from 'react';

import { ProducContextProps, Product } from '../interfaces/interfaces';
import { useProduct } from '../hooks'
import stylesCss from '../styles/styles.module.css'


export const ProductContext = createContext({} as ProducContextProps);
const { Provider } = ProductContext

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  styles?: React.CSSProperties
}

export const ProductCard = ({ children, product, className, styles }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct()

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={ `${ stylesCss.productCard } ${ className }` } style={ styles && styles }>
        { children }
      </div>
    </Provider>
  )
}
