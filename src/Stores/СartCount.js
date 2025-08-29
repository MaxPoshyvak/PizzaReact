import { create } from 'zustand';

const useStore = create((set) => ({
    currentPizzaInCart: [],

    add: (pizza) =>
        set((state) => {
            const existing = state.currentPizzaInCart.find(
                (p) => p.title === pizza.title && p.size === pizza.size && p.type === pizza.type
            );

            if (existing) {
                return {
                    currentPizzaInCart: state.currentPizzaInCart.map((p) =>
                        p === existing ? { ...p, amount: p.amount + 1 } : p
                    ),
                };
            }

            return {
                currentPizzaInCart: [...state.currentPizzaInCart, pizza],
            };
        }),

    remove: (pizza) =>
        set((state) => {
            return {
                currentPizzaInCart: state.currentPizzaInCart
                    .map((p) =>
                        p.title === pizza.title && p.size === pizza.size && p.type === pizza.type
                            ? { ...p, amount: p.amount - 1 }
                            : p
                    )
                    .filter((p) => p.amount > 0),
            };
        }),

    changeAmount: (pizza, amount) =>
        set((state) => ({
            currentPizzaInCart: state.currentPizzaInCart.map((p) =>
                p.title === pizza.title && p.size === pizza.size && p.type === pizza.type
                    ? { ...p, amount: Math.max(1, amount) } // мінімум 1
                    : p
            ),
        })),
    removeAll: (pizza) =>
        set((state) => ({
            currentPizzaInCart: state.currentPizzaInCart.filter(
                (p) => !(p.title === pizza.title && p.size === pizza.size && p.type === pizza.type)
            ),
        })),
}));

export default useStore;
