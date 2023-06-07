import { useEffect, useState } from "react";

const MintNFTBodyController = () => {
    const [ name , setName ] = useState<string>();
    const [ symbol, setSymbol ] = useState<string>();
    const [ baseUrl, setBaseUrl ] = useState<string>();

    useEffect(() => {
        console.log('name : ' ,name);
    },[name]);

    const getData = () => {
        return {name : name, symbol : symbol, baseUrl : baseUrl}
    }

    return {
        setName : setName,
        setSymbol : setSymbol,
        setBaseUrl : setBaseUrl,
        data : getData
    }
}
export default MintNFTBodyController;