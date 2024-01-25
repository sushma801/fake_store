export interface IProductInfo {
  id?: number;
  title: string;
  category: string;
  image: string;
  price: number;
  description: string;
  rating: IRatings;
  flag: boolean;
}

export interface IRatings {
  rate?: number;
  count?: number;
}
