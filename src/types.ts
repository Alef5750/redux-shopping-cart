export interface ICartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface IAddItemToCartPayload {
  id: number;
  quantity: number;
}
