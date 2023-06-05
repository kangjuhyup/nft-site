import { useState } from "react";

const MintNFTBodyController = () => {
    const [ name , setName ] = useState<string>();
    const [ symbol, setSymbol ] = useState<string>();
    const [ baseUrl, setBaseUrl ] = useState<string>();

    const getData = () => {
        return {name,symbol,baseUrl}
    }

    return {
        setName : setName,
        setSymbol : setSymbol,
        setBaseUrl : setBaseUrl,
        data : getData
    }
}
export default MintNFTBodyController;