'use client';

import styled from 'styled-components';

const Input = styled.input`
padding: 6px 12px;
border-radius: 8px;
font-size: 1rem;
line-height: 1.5;
border: 1px solid lightgray;
color: black;
background: white;
`
const INPUT_FEILD_TYPE = {
    NAME : 'name',
    SYMBOL : 'symbol',
    BASE_URL : 'baseUrl',
    TOTAL_SUPPLY : 'totalSupply'
} as const;

export type INPUT_FEILD_TYPE = typeof INPUT_FEILD_TYPE[keyof typeof INPUT_FEILD_TYPE];


export interface InputFieldProps {
    placeHolder : string,
    type : INPUT_FEILD_TYPE,
    handle : any
}

const InputField = (props : InputFieldProps) => {
    const { placeHolder ,type, handle } = props;

    return (
        <div>
            <Input 
                type="text" 
                placeholder={placeHolder} 
                onChange={(e) => handle(e.target.value)} 
            />
        </div>
    )
}

export default InputField;