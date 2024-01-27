export interface IProductInfo {
  id?: number;
  title: string;
  category: string;
  image: string;
  price: number;
  description: string;
  rating?: IRatings;
  isEditProduct?: boolean;
  handleReload?: () => void;
}

export interface IRatings {
  rate?: number;
  count?: number;
}

export interface IDropDown {
  label: string;
  value: string;
}
