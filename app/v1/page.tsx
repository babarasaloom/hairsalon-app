import React from "react";

// --- SVG Icon Components ---
// Using inline SVGs for icons to keep it all in one file and avoid external dependencies.

const UserIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const BellIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

const SearchIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const SlidersHorizontalIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="21" y1="4" x2="14" y2="4" />
    <line x1="10" y1="4" x2="3" y2="4" />
    <line x1="21" y1="12" x2="12" y2="12" />
    <line x1="8" y1="12" x2="3" y2="12" />
    <line x1="21" y1="20" x2="16" y2="20" />
    <line x1="12" y1="20" x2="3" y2="20" />
    <line x1="14" y1="2" x2="14" y2="6" />
    <line x1="8" y1="10" x2="8" y2="14" />
    <line x1="16" y1="18" x2="16" y2="22" />
  </svg>
);

const HomeIcon = ({
  className,
  filled,
}: {
  className?: string;
  filled?: boolean;
}) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const HeartIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

// --- Main App Component ---
export default function SalonApp() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <div className="max-w-sm mx-auto bg-white shadow-lg rounded-b-3xl min-h-screen relative pb-28">
        {/* Screen Top Bar */}
        <div className="flex justify-between items-center p-4 pt-8">
          <div className="flex items-center space-x-3">
            <img
              src="https://placehold.co/40x40/E2E8F0/4A5568?text=JT"
              alt="Jacob Thomas"
              className="w-12 h-12 rounded-full border-2 border-gray-200"
            />
            <div>
              <p className="text-gray-500 text-sm">Good Morning!</p>
              <h1 className="font-bold text-gray-800 text-lg">Jacob Thomas</h1>
            </div>
          </div>
          <button className="p-3 bg-gray-100 rounded-full">
            <BellIcon className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Search Bar */}
        {/* <div className="p-4">
          <div className="relative flex items-center">
            <SearchIcon className="absolute left-4 h-5 w-5 text-gray-400" />
            <input 
              type="text"
              placeholder="Search Salon, Specialist"
              className="w-full bg-gray-100 rounded-full py-3 pl-12 pr-16 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button className="absolute right-2 p-2 bg-white rounded-full shadow-sm">
              <SlidersHorizontalIcon className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div> */}

        {/* Promotion Banner */}
        {/* <div className="px-4 pb-4">
          <div className="relative bg-gray-800 rounded-2xl p-6 text-white overflow-hidden">
            <div className="relative z-10 w-1/2">
              <h2 className="text-2xl font-bold leading-tight">
                Get 20% Off Your Next Haircut!
              </h2>
              <button className="mt-4 bg-orange-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-orange-600 transition-colors">
                Book Now
              </button>
            </div>
            <div className="absolute -right-16 -bottom-8 w-56 h-56">
              <img
                src="https://images.unsplash.com/photo-1599351431202-145b0d31557c?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Barber giving a haircut"
                className="w-full h-full object-cover rounded-l-full"
              />
            </div>
          </div>
        </div> */}

        {/* Categories */}
        <div className="px-4 py-2">
          <h3 className="font-bold text-xl text-gray-800 mb-3">Category</h3>
          <div className="flex space-x-3 overflow-x-auto pb-2 -mx-4 px-4">
            <button className="bg-orange-500 text-white font-semibold py-2 px-5 rounded-full whitespace-nowrap">
              Hairdressing
            </button>
            <button className="bg-gray-100 text-gray-600 font-semibold py-2 px-5 rounded-full whitespace-nowrap">
              Hair Color
            </button>
            <button className="bg-gray-100 text-gray-600 font-semibold py-2 px-5 rounded-full whitespace-nowrap">
              Oil Treatment
            </button>
            <button className="bg-gray-100 text-gray-600 font-semibold py-2 px-5 rounded-full whitespace-nowrap">
              Coloring
            </button>
          </div>
        </div>

        {/* Hairdressing Section */}
        <div className="px-4 py-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-xl text-gray-800">Hairdressing</h3>
            <a href="#" className="text-orange-500 font-semibold">
              See All
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* Specialist Card 1 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1622288093980-9fb809461133?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="David Marcomin"
                className="w-full h-40 object-cover"
              />
              <div className="p-3">
                <h4 className="font-bold text-gray-800">David Marcomin</h4>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-gray-600 font-semibold">$ 49.32</p>
                  <button className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-2xl">
                    +
                  </button>
                </div>
              </div>
            </div>
            {/* Specialist Card 2 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1621607512214-68297480165e?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Richard Anderson"
                className="w-full h-40 object-cover"
              />
              <div className="p-3">
                <h4 className="font-bold text-gray-800">Richard Anderson</h4>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-gray-600 font-semibold">$ 28.48</p>
                  <button className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-2xl">
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-4 left-0 right-0 max-w-sm mx-auto px-4 z-20">
          <div className="bg-gray-800 rounded-full flex justify-around items-center p-2 shadow-2xl">
            <button className="flex items-center space-x-2 bg-orange-500 text-white px-5 py-2 rounded-full">
              <HomeIcon className="h-6 w-6" filled={true} />
              <span className="font-semibold text-sm">Home</span>
            </button>
            <button className="p-2 text-gray-400 hover:text-white">
              <SearchIcon className="h-7 w-7" />
            </button>
            <button className="p-2 text-gray-400 hover:text-white">
              <HeartIcon className="h-7 w-7" />
            </button>
            <button className="p-2 text-gray-400 hover:text-white">
              <UserIcon className="h-7 w-7" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
