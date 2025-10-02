import { Category, Service } from "@/definitions/services";

export const categories: Category[] = [
  {
    id: 1,
    name: "Hairstyling",
    image: "/images/dustin-chu.jpg",
    isActive: true,
  },
  {
    id: 2,
    name: "Nails",
    image: "/images/ransford-quaye.jpg",
    isActive: false,
  },
  {
    id: 3,
    name: "Conditioning",
    image: "/images/houcine-ncib.jpg",
    isActive: false,
  },
  {
    id: 4,
    name: "Extensions",
    image: "/images/houcine-ncib.jpg",
    isActive: false,
  },
  {
    id: 5,
    name: "Wigs",
    image: "/images/houcine-ncib.jpg",
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
    image: "/images/ben-iwara.jpg",
  },
  {
    id: 2,
    name: "Fade & Style",
    artist: "Richard Anderson",
    price: "$28.48",
    description: "",
    image: "/images/airam-dato.jpg",
  },
  {
    id: 3,
    name: "Men's Haircut",
    artist: "David Marcomin",
    price: "$49.32",
    description: "",
    image: "/images/olivier-rule.jpg",
  },
  {
    id: 4,
    name: "Fade & Style",
    artist: "Richard Anderson",
    price: "$28.48",
    description: "",
    image: "/images/luke-southern.jpg",
  },
  {
    id: 5,
    name: "Men's Haircut",
    artist: "David Marcomin",
    price: "$49.32",
    description: "",
    image: "/images/gilda-gonzalez.jpg",
  },
  {
    id: 6,
    name: "Fade & Style",
    artist: "Richard Anderson",
    price: "$28.48",
    description: "",
    image: "/images/dwayne-joe.jpg",
  },
];

export const topBookedServices = [
  {
    id: 101,
    name: "Men’s Haircut",
    price: "$25",
    image: "/images/dwayne-joe.jpg",
  },
  {
    id: 102,
    name: "Beard Trim",
    price: "$15",
    image: "/images/gilda-gonzalez.jpg",
  },
  {
    id: 103,
    name: "Hair Coloring",
    price: "$50",
    image: "/images/luke-southern.jpg",
  },
];
