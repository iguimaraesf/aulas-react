import { useContext, useRef } from "react"
import { Link } from "react-router-dom"
import { UsuarioLogadoContext } from "../../shared/contexts"

export const Dashboard = () => {
    // contador somente para exemplo do useRef
    const counterRef = useRef({counter: 0})

    const {nomeDoUsuario} = useContext(UsuarioLogadoContext)

    return (
        <div>
            <p>Minha dashboard</p>
            <p>Usuário logado: {nomeDoUsuario}</p>
            <p>Contador: {counterRef.current.counter}</p>
            <button onClick={() => counterRef.current.counter++}>Somar</button>
            <button onClick={() => console.log(counterRef.current.counter)}>Logar</button>
            <Link to="/entrar">Login</Link>
        </div>
    )
}