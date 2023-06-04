'use client';

import InputFieldController, { INPUT_FEILD_TYPE } from '@/components/controller/inputField';
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


export interface InputFieldProps {
    placeHolder : string,
    type : INPUT_FEILD_TYPE
}

const InputField = (props : InputFieldProps) => {

    const { change, finish } = InputFieldController(props.type); 

    return (
        <div>
            <Input 
                type="text" 
                placeholder={props.placeHolder} 
                onChange={(e) => change(e.target.value)} 
                onBlur={() => finish()}
            />
        </div>
    )
}

export default InputField;