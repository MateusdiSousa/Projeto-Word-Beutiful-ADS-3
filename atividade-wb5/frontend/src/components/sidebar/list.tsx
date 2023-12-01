import React from "react";
import { components } from "react-select";

export interface ITelefone {
    id: number,
    ddd: String,
    numero: String,
    links: []
}

export interface ITelefones {
    telefones : Array<ITelefone>
}



export function ListaTelefone({telefones} : ITelefones) {
    return (
        <>
            
            <ul>
                {telefones.map(telefone => {
                    return (
                        <li>DDD: {telefone.ddd} Número : {telefone.numero}</li>
                    )
                })}
            </ul>
        </>
    )
}