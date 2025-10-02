import { Category, Service } from "@/definitions/services";

export const categories: Category[] = [
  {
    id: 1,
    name: "Hairstyling",
    image: "/images/hairstyling/dustin-chu.jpg",
    isActive: true,
  },
  {
    id: 2,
    name: "Nails",
    image: "/images/hairstyling/ransford-quaye.jpg",
    isActive: false,
  },
  {
    id: 3,
    name: "Conditioning",
    image: "/images/hairstyling/houcine-ncib.jpg",
    isActive: false,
  },
  {
    id: 4,
    name: "Extensions",
    image: "/images/hairstyling/houcine-ncib.jpg",
    isActive: false,
  },
  {
    id: 5,
    name: "Wigs",
    image: "/images/hairstyling/houcine-ncib.jpg",
    isActive: false,
  },
];

export const services: Service[] = [
  {
    id: 1,
    name: "Men's Haircut",
    artist: "David Marcomin",
    price: "$49.32",
    description: "",
    image: "/images/hairstyling/ben-iwara.jpg",
  },
  {
    id: 2,
    name: "Fade & Style",
    artist: "Richard Anderson",
    price: "$28.48",
    description: "",
    image: "/images/hairstyling/airam-dato.jpg",
  },
  {
    id: 3,
    name: "Men's Haircut",
    artist: "David Marcomin",
    price: "$49.32",
    description: "",
    image: "/images/hairstyling/olivier-rule.jpg",
  },
  {
    id: 4,
    name: "Fade & Style",
    artist: "Richard Anderson",
    price: "$28.48",
    description: "",
    image: "/images/hairstyling/luke-southern.jpg",
  },
  {
    id: 5,
    name: "Men's Haircut",
    artist: "David Marcomin",
    price: "$49.32",
    description: "",
    image: "/images/hairstyling/gilda-gonzalez.jpg",
  },
  {
    id: 6,
    name: "Fade & Style",
    artist: "Richard Anderson",
    price: "$28.48",
    description: "",
    image: "/images/hairstyling/dwayne-joe.jpg",
  },
];

export const topBookedServices = [
  {
    id: 101,
    name: "Men’s Haircut",
    price: "$25",
    image: "/images/hairstyling/dwayne-joe.jpg",
  },
  {
    id: 102,
    name: "Beard Trim",
    price: "$15",
    image: "/images/hairstyling/gilda-gonzalez.jpg",
  },
  {
    id: 103,
    name: "Hair Coloring",
    price: "$50",
    image: "/images/hairstyling/luke-southern.jpg",
  },
];
