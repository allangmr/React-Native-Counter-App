import { create } from "zustand";

export interface ProfileState {
    name: string;
    email: string;
    changeProfile: (name: string, email: string) => void;
}

export const useProfileStore = create<ProfileState>()((set) =>
    ({
    name: 'Jhon Doe',
    email: 'jhon.doe@google.com',
    changeProfile: (name: string, email: string) => {
        set({name: name, email: email});
    },
}));
