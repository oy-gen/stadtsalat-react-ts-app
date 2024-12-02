import { TagsEnum } from "../enums/tags.enum";
export interface Product {
  id: string;
  name: string;
  rating: number;
  description: string | null;
  locationBasedPrices: string | null;
  allergens: string[] | null;
  image: Image;
  price: Price;
  tags: TagsEnum[];
  productTags: string[];
}

export interface Price {
  withVat: string;
  withoutVat: string;
  vat: string;
  vatAmount: string;
}

export interface Image {
  url: string;
  name: string;
}
