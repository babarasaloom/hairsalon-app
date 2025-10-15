"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type Booking = {
  serviceId: string;
  artist: {
    id: string;
    name: string;
    image: string;
  };
  selectedDate: string;
  selectedTime: string;
};

type BookingStore = {
  bookings: Booking[];
  addBooking: (booking: Booking) => void;
  removeBooking: (serviceId: string, artistId: string) => void;
  clearBookings: () => void;
};

export const useBookingStore = create<BookingStore>()(
  persist(
    (set) => ({
      bookings: [],

      addBooking: (newBooking) =>
        set((state) => {
          // prevent duplicates (same artist + service)
          const exists = state.bookings.some(
            (b) =>
              b.serviceId === newBooking.serviceId &&
              b.artist.id === newBooking.artist.id
          );
          if (exists) return state;
          return { bookings: [...state.bookings, newBooking] };
        }),

      removeBooking: (serviceId, artistId) =>
        set((state) => ({
          bookings: state.bookings.filter(
            (b) => !(b.serviceId === serviceId && b.artist.id === artistId)
          ),
        })),

      clearBookings: () => set({ bookings: [] }),
    }),
    {
      name: "booking-storage", // localStorage key
      storage: createJSONStorage(() => localStorage),
    }
  )
);
