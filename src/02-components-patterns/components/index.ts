import { ProductButtons } from './ProductButtons'
import { ProductCard as ProductCardComponent } from './ProductCard'
import { ProductImage } from './ProductImage'
import { ProductTitle } from './ProductTitle'

export * from './ProductButtons'
export * from './ProductImage'
export * from './ProductTitle'

export const ProductCard = Object.assign( ProductCardComponent, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons
})

export default ProductCard