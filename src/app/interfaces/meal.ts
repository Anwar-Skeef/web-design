export interface GeneralResponse {
  status: string;
  data: any;
}
export interface meal {
  id: number;
  name: string;
  img: string;
  description: string;
  price: number;
  is_available: boolean;
  default_delivery: number;
  created_at: Date;
  meal_category_id: number;
  available_discount: null;
}
export interface Sign {
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
}
