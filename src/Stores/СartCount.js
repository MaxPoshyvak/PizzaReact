import { create } from 'zustand';

const useStore = create((set) => ({
    cartCount: 0,
    currentPizzaInCart: [],
    add: (pizza) =>
        set((state) => ({
            cartCount: state.cartCount + 1,
            currentPizzaInCart: [...state.currentPizzaInCart, pizza],
        })),
    remove: () => set((state) => ({ cartCount: state.cartCount - 1 })),
}));

export default useStore;
