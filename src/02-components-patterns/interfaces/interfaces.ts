
export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProducContextProps {
  counter: number;
  increaseBy: ( value: number ) => void;
  product: Product
}