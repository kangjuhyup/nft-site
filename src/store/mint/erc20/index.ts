import create from 'zustand'

interface ERC20InputFeildState {
    name? : string;
    symbol? : string;
    totalSupply? : string;

    setName : (newName:string) => void;
    setSymbol : (newSymbol:string) => void;
    setTotalSupply : (newTotalSupply:string) => void;
}

export const useERC20InputFeild = create<ERC20InputFeildState>((set) => ({
    setName : (newName:string) => set({name : newName}),
    setSymbol : (newSymbol:string) => set({symbol : newSymbol}),
    setTotalSupply : (newTotalSupply:string) => set({totalSupply : newTotalSupply}),
}))