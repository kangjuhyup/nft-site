'use client';

import { useState } from "react";

const InputFieldController = () => {
    const [fieldData,setData] = useState<string|number>();

    const changeField = <T extends string|number>(field : T) => {
        setData(field);
    }

    const getFieldData = () =>  {
        if(fieldData) {
            return fieldData;
        }
    }

    return {
        get : getFieldData,
        change : changeField,
    }

}

export default InputFieldController;