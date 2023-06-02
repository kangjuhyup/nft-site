'use client';

import InputFieldController from "@/components/view_controller/inputField";

const InputField = () => {

    const { change } = InputFieldController(); 

    return (
        <div>
            <input type="text" onChange={(e) => change(e.target.value)}></input>
        </div>
    )
}

export default InputField;