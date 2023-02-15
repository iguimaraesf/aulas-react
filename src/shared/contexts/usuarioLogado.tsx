import { createContext, useCallback } from "react";

interface UsuarioLogadoContextData {
    nomeDoUsuario: string
    logout: () => void
    children?: React.ReactNode
}
export const UsuarioLogadoContext = createContext<UsuarioLogadoContextData>({} as UsuarioLogadoContextData)

export const UsuarioLogadoProvider: React.FC<UsuarioLogadoContextData> = ({children}) => {
    const handleLogout = useCallback(() => {
        console.log("logout executou")
    }, [])
    return (
        <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: 'seu zé', logout: handleLogout}}>
            {children}
        </UsuarioLogadoContext.Provider>
    )
}