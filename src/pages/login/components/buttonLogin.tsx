import React, { useContext } from "react"
import { UsuarioLogadoContext } from "../../../shared/contexts"

interface ButtonLoginProps {
    type?: "button" | "submit" | "reset"
    onClick: () => void
    children: React.ReactNode
}
export const ButtonLogin: React.FC<ButtonLoginProps> = ({onClick, type, children}) => {
    const {nomeDoUsuario} = useContext(UsuarioLogadoContext)
    return (
        <button type={type} onClick={onClick}>
            {nomeDoUsuario} - {children}
        </button>
    )
}