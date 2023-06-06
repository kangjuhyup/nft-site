
import create from 'zustand'

interface AuthState {
    isAuth? : boolean;
    
    setAuth : (auth:boolean) => void;
}

export const authState = create<AuthState>((set) => ({
    setAuth : (auth:boolean) => set({isAuth : auth}),
}))