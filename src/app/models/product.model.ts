export type Variant = {
  image: string;
  name: string;
};

export type Product = {
  id: number;
  image: string;
  discount?: string;
  name: string;
  currentPrice: string;
  regularPrice: string;
  variants: Variant[];
  sold: number;
  rating: number;
};

export type Banner = {
  image: string;
  link: string;
  alt: string;
};
