import React from "react";

import * as C from './style'

interface ModalProps {
    modalController: any
    children: React.ReactElement
}

export default function Modal({modalController, children}: ModalProps) {
    return(
        <C.ModalContainer>
            <C.BtnClose onClick={ modalController } >+</C.BtnClose>
            {
                children
            }
        </C.ModalContainer>
    )
}