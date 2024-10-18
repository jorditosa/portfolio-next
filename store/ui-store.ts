import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Store = {
    theme: string;
    setTheme: (theme: string) => void;
}

const useUIStore = create<Store>()(
    persist(
        (set, get) => ({
            theme: 'light',
            
            setTheme: (theme: string) => set({ theme: theme }),
        }),
        {
            name: "ui-store"
        }
    )
)

export default useUIStore