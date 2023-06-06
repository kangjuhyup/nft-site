'use client';

import { useState } from "react";


const ModalController = (open:boolean) => {
    const [message,setMessage] = useState<string>();
    const [isOpend,setOpen] = useState<boolean>(open);

    const openModal = () => {
        setOpen(true);
    }

    const closeModal = () => {
        setOpen(false);
    }

    return {
        open : openModal,
        close : closeModal,
        isOpend : isOpend,
        message : message,
        setMessage : setMessage
    }

}

export default ModalController;