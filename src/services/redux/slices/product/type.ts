export interface Product {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  discount: number;
  dateAdded: number;
  collection: number;
  sizes: string[]; // Đây là mảng chứa các số (sizes)
  colors: string[]; // Đây là mảng chứa các chuỗi (colors)
  brands: string;
  quantity: number;
}
