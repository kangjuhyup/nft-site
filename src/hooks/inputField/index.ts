import { InputFieldType, INPUT_FEILD_TYPE } from "@/components/controller/inputField";
import { useState } from "react";

const useInputField = () => {
    const [value, setValue] = useState({});

    const handleChange = (type: INPUT_FEILD_TYPE, newValue: string) => {
        setValue((prevValue) => {
            switch(type) {
                case InputFieldType.NAME : 
                    return { ...prevValue, name : newValue};
                case InputFieldType.SYMBOL : 
                    return { ...prevValue, symbol : newValue};
                case InputFieldType.BASE_URL : 
                    return { ...prevValue, baseUrl : newValue};
                case InputFieldType.TOTAL_SUPPLY :
                    return {...prevValue, totalSupply : newValue};
                default :
                    return prevValue;
            }
        });
    };

    return { value, handleChange };
};

export default useInputField;
