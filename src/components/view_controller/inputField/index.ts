import { useInputFeild } from "@/store/mint";
import { data } from "autoprefixer";
import { useState } from "react";

const INPUT_FEILD_TYPE = {
    NAME : 'name',
    SYMBOL : 'symbol',
    BASE_URL : 'baseUrl'
} as const;

export type INPUT_FEILD_TYPE = typeof INPUT_FEILD_TYPE[keyof typeof INPUT_FEILD_TYPE];

const InputFieldController = (props:INPUT_FEILD_TYPE) => {
    const [fieldData,setData] = useState<string|number>();
    const { setName, setSymbol, setBaseUrl } = useInputFeild();
    const changeField = <T extends string|number>(field : T) => {
        setData(field);
    }

    const getFieldData = () =>  {
        if(fieldData) {
            return fieldData;
        }
    }

    const editFinish = () => {
        console.log('editFinish')
        if(!fieldData) return;
        switch(props) {
            case INPUT_FEILD_TYPE.NAME : 
            console.log('setName')
                setName(fieldData.toString());
                break;
            case INPUT_FEILD_TYPE.SYMBOL :
                console.log('setSymbol')
                setSymbol(fieldData.toString());
                break;
            case INPUT_FEILD_TYPE.BASE_URL :
                console.log('senUrl')
                setBaseUrl(fieldData.toString());
                break;
        }
    }

    return {
        get : getFieldData,
        change : changeField,
        finish : editFinish,
    }

}

export default InputFieldController;