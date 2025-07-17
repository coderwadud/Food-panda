export interface ProductCategoryForm {
  id: string | null;
  product_category_name: string | null;
  description: string | null;
  product_ctg_status: boolean | null;
  category_forane_key: string | null;
}
export interface SellerCategoryForm {
  id: string | null;
  sellerCategoryName: string | null;
  description: string | null;
  seller_ctg_status: boolean | null;
}

export interface SellerProfileForm {
  id: string | null;
  shopName: string | null;
  sellerName: string | null;
  email: string | null;
  phone: string | null;
  sellerCategoryId: string | null;
  photo: string | null;
  tinNumber: string | null;
  vatNumber: string | null;
  sellerStatus: boolean | null;
}
export interface fullAddress{
  id: string | null;
  houseName: string | null;
  street: string | null;
  area: string | null;
  postOffice: string | null;
  postalCode: string | null;
  city: string | null;
  country: string | null;
  addressLine1: string | null;
  addressLine2: string | null;
  landmark: string | null;
}

export interface ProductForm {
  id: string | null;
  productName: string | null;
  productCategoryId: string | null; 
  images: string | null; 
  sellerId: string | null;
  price: number | null;
  discountPercentage: number | null;
  description: string | null;
  status: boolean | null;
}
