import { useState } from "react";

const MintERC20BodyController = () => {
    const [ name , setName ] = useState<string>();
    const [ symbol, setSymbol ] = useState<string>();
    const [ totalSupply, setTotalSupply ] = useState<string>();

    const getData = () => {
        return {name,symbol,totalSupply}
    }

    return {
        setName : setName,
        setSymbol : setSymbol,
        setTotalSupply : setTotalSupply,
        data : getData
    }
}
export default MintERC20BodyController;