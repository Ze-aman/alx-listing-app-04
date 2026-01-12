export interface PropertyAddressProps {
  state: string;
  city: string;
  country: string;
}

export interface PropertyOffersProps {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PropertyProps {
  name: string;
  address: PropertyAddressProps;
  rating: number;
  category: string[];
  price: number;
  offers: PropertyOffersProps;
  image: string;
  discount: string;
}

export interface PillProps {
  label: string;
  isActive: boolean;
}