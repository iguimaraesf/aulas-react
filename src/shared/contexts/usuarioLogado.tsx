import { createContext } from "react";

interface UsuarioLogadoContextData {
    nomeDoUsuario: string
    children?: React.ReactNode
}
const UsuarioLogadoContext = createContext<UsuarioLogadoContextData>({} as UsuarioLogadoContextData)

export const UsuarioLogadoProvider: React.FC<UsuarioLogadoContextData> = ({children}) => {
    return (
        <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: 'seu zé'}}>
            {children}
        </UsuarioLogadoContext.Provider>
    )
}