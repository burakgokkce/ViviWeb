import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Course } from '@/types';

interface CartState {
  items: Course[];
  subtotal: number;
  addToCart: (course: Course) => void;
  removeFromCart: (courseId: string) => void;
  clearCart: () => void;
  isInCart: (courseId: string) => boolean;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      subtotal: 0,
      
      addToCart: (course) => {
        const isAlreadyInCart = get().items.some((item) => item.id === course.id);
        if (isAlreadyInCart) return;
        
        set((state) => ({
          items: [...state.items, course],
          subtotal: state.subtotal + course.price,
        }));
      },
      
      removeFromCart: (courseId) => {
        set((state) => {
          const courseToRemove = state.items.find((item) => item.id === courseId);
          const newItems = state.items.filter((item) => item.id !== courseId);
          
          return {
            items: newItems,
            subtotal: courseToRemove
              ? state.subtotal - courseToRemove.price
              : state.subtotal,
          };
        });
      },
      
      clearCart: () => set({ items: [], subtotal: 0 }),
      
      isInCart: (courseId) => get().items.some((item) => item.id === courseId),
    }),
    {
      name: 'vivi-cart-storage',
    }
  )
);

