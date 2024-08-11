export type Plan = {
  id: number;
  plan_size: number;
  plan_name: string;
  no_of_bedrooms: number;
  no_of_bathrooms: number;
  category_id: number;
  price_per_sqm: number;
  price: number;
  plinth_area: number;
  floors: number;
  plan_length: number;
  plan_height: number;
  description: string;
  images: Image[];
  features: Feature[];
};

export type Category = {
  id: number;
  name: string;
  description: string;
};

export type Feature = {
  id: number;
  description: string;
};

export type Image = {
  id: number;
  image_path: string;
};

export type Filters = {
  bdrm: string;
  btrm: string;
  flrs: string;
  prce: string;
};
