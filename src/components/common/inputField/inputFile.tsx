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



export interface InputFieldProps {
    placeHolder : string,
    handle : any
}

const InputFile = (props : InputFieldProps) => {
    const { placeHolder, handle } = props;

    return (
        <div>
            <Input 
                type="file" 
                placeholder={placeHolder} 
                onChange={(e) => {
                    handle(e.target.files[0])}} 
            />
        </div>
    )
}

export default InputFile;