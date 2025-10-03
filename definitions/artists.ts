export type Artist = {
  id: number;
  name: string;
  image: string;
  specialties: string[];
  price: string;
  rating: number; // 1-5 stars
  reviews: number; // number of reviews
  availability: string; // e.g. "Available Today", "Fully Booked", "Next Week"
};
