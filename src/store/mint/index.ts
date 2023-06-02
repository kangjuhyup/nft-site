import create from 'zustand'

interface InputFeildState {
    name? : string;
    symbol? : string;
    baseUrl? : string;

    setName : (newName:string) => void;
    setSymbol : (newSymbol:string) => void;
    setBaseUrl : (newUrl:string) => void;
}

export const useInputFeild = create<InputFeildState>((set) => ({
    setName : (newName:string) => set({name : newName}),
    setSymbol : (newSymbol:string) => set({symbol : newSymbol}),
    setBaseUrl : (newUrl:string) => set({baseUrl : newUrl}),
}))