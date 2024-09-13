import { create } from "zustand";

export interface counterStore {
    count: number;
    incrementBy: (value: number) => void;
}

// useCounterStore
export const useCounterStore = create<counterStore>()((set, get) =>
    ({
        count: 0,
        // incrementBy: (value: number) =>  set((state) => ({count: state.count + value})),
        incrementBy: (value: number) =>  set({count: get().count + value}),
    })
);
