"use client";

import { useState } from "react";
import {
  FiSearch,
  FiSliders,
  FiHome,
  FiCalendar,
  FiHeart,
  FiUser,
} from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import Image from "next/image";

const topServices = [
  { name: "Manicures", icon: "💅" },
  { name: "Facial", icon: "🧖‍♀️" },
  { name: "Haircut", icon: "✂️" },
  { name: "Waxing", icon: "🧴" },
  { name: "Massage", icon: "💆" },
];

const topArtists = [
  {
    id: 1,
    name: "Alaina Tisha",
    role: "Beauty Artist",
    rating: 4.8,
    price: 39,
    reviews: 4,
    image: "/images/hairstyling/ben-iwara.jpg",
  },
  {
    id: 2,
    name: "Amber Heard",
    role: "Beauty Artist",
    rating: 3.6,
    price: 27,
    reviews: 2,
    image: "/images/hairstyling/airam-dato.jpg",
  },
];

// 🔹 Reusable Artist Card
function ArtistCard({
  name,
  role,
  rating,
  price,
  reviews,
  image,
}: {
  name: string;
  role: string;
  rating: number;
  price: number;
  reviews: number;
  image: string;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-3 w-64 flex-shrink-0">
      <Image
        src={image}
        alt={name}
        width={240}
        height={150}
        className="rounded-xl object-cover w-full h-36"
      />
      <h3 className="mt-3 font-semibold text-gray-900">{name}</h3>
      <p className="text-sm text-gray-500">{role}</p>

      <div className="flex items-center mt-2 text-sm">
        <AiFillStar className="text-yellow-500 mr-1" />
        <span className="font-medium">{rating}</span>
        <span className="ml-2 text-gray-400 text-xs">{reviews} reviews</span>
      </div>

      <p className="mt-1 font-semibold text-brown-600">
        ${price}.00{" "}
        <span className="text-sm font-normal text-gray-400">/hr</span>
      </p>
    </div>
  );
}

// 🔹 App Screen Content (used both inside bezel + full mobile)
function AppScreen() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="relative flex flex-col min-h-screen bg-[#fefaf8]">
      {/* Fixed Header */}
      <header className="sticky top-0 z-20 bg-[#fefaf8] px-5  py-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center rounded-full overflow-hidden border border-gray-200">
            <Image
              src="/images/hairstyling/jessica-felicio.jpg"
              alt="Profile"
              width={40}
              height={40}
              className="object-fit"
            />
          </div>
          <h1 className="text-lg font-semibold">Hi There</h1>
        </div>

        {/* Search Bar */}
        {/* <div className="flex items-center mt-5 bg-white px-3 py-3 rounded-2xl shadow-md">
          <FiSearch className="text-gray-400 mr-2 text-lg" />
          <input
            type="text"
            placeholder="Find your best artist..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 outline-none bg-transparent text-sm"
          />
          <button className="bg-brown-500 p-2 rounded-lg text-white hover:bg-brown-600 transition">
            <FiSliders />
          </button>
        </div> */}
      </header>

      {/* Scrollable Content */}
      <main className="flex-1 overflow-y-auto md:mb-20">
        {/* Top Services */}
        <section className="mt-2 px-5">
          <h2 className="font-semibold text-lg mb-3">Top Services</h2>
          <div className="flex gap-6 overflow-x-auto no-scrollbar pb-2">
            {topServices.map((service, i) => (
              <div key={i} className="flex flex-col items-center min-w-[70px]">
                <div className="bg-white shadow-md p-4 rounded-2xl text-2xl hover:scale-105 transition">
                  {service.icon}
                </div>
                <p className="text-sm mt-2 text-gray-700">{service.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Top Artist */}
        <section className="mt-8 px-5">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-semibold text-lg">Top Artist</h2>
            <button className="text-sm text-brown-600 font-medium hover:underline">
              View all
            </button>
          </div>
          <div className="flex gap-5 overflow-x-auto no-scrollbar pb-2">
            {topArtists.map((artist) => (
              <ArtistCard key={artist.id} {...artist} />
            ))}
          </div>
        </section>

        {/* Best Artist Near You */}
        <section className="mt-8 px-5 mb-24">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-semibold text-lg">Best Artist Near You</h2>
            <button className="text-sm text-brown-600 font-medium hover:underline">
              View all
            </button>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-4 flex items-center hover:shadow-lg transition">
            <Image
              src="/images/hairstyling/dustin-chu.jpg"
              alt="Waxing Artist"
              width={90}
              height={90}
              className="rounded-xl object-cover"
            />
            <div className="ml-4 flex-1">
              <h3 className="font-semibold text-gray-900">Waxing Artist</h3>
              <div className="flex items-center text-sm mt-1">
                <AiFillStar className="text-yellow-500 mr-1" />
                <span className="font-medium">4.8</span>
                <span className="ml-3 text-gray-400 text-xs">47 Dubai</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Scoped Bottom Navigation */}
      <nav className="fixed md:absolute md:bottom-6 bottom-0 left-0 w-full bg-white shadow-lg md:p-6 py-3 px-8 flex justify-between items-center">
        <button
          onClick={() => setActiveTab("home")}
          className={`flex flex-col items-center text-sm ${
            activeTab === "home" ? "text-brown-600" : "text-gray-400"
          }`}
        >
          <FiHome className="text-xl mb-1" />
          Home
        </button>
        <button
          onClick={() => setActiveTab("calendar")}
          className={`flex flex-col items-center text-sm ${
            activeTab === "calendar" ? "text-brown-600" : "text-gray-400"
          }`}
        >
          <FiCalendar className="text-xl mb-1" />
          Bookings
        </button>
        <button
          onClick={() => setActiveTab("favorites")}
          className={`flex flex-col items-center text-sm ${
            activeTab === "favorites" ? "text-brown-600" : "text-gray-400"
          }`}
        >
          <FiHeart className="text-xl mb-1" />
          Favorites
        </button>
        <button
          onClick={() => setActiveTab("profile")}
          className={`flex flex-col items-center text-sm ${
            activeTab === "profile" ? "text-brown-600" : "text-gray-400"
          }`}
        >
          <FiUser className="text-xl mb-1" />
          Profile
        </button>
      </nav>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      {/* Mobile (no bezel) */}
      <div className="w-full h-full md:hidden">
        <AppScreen />
      </div>

      {/* Desktop iPhone Mockup */}
      <div className="hidden md:flex items-center justify-center">
        <div className="relative w-[390px] h-[844px] rounded-[3rem] shadow-2xl overflow-hidden">
          {/* Inner screen */}
          <div className="absolute inset-[2px] rounded-[2.5rem] overflow-hidden flex flex-col bg-[#fefaf8]">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 rounded-b-3xl bg-black z-20"></div>
            <AppScreen />
          </div>
        </div>
      </div>
    </div>
  );
}
