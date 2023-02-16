import { useCallback, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { useUsuarioLogado } from "../../shared/hooks"

export const Dashboard = () => {
    // contador somente para exemplo do useRef
    const counterRef = useRef({counter: 0})

    const {nomeDoUsuario, logout} = useUsuarioLogado()

    const [lista, setLista] = useState<string[]>(["Teste 1", "Teste 12", "Teste 3"])
    const handleAdicionarLista: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
        // precisa colocar o valor numa constante primeiro
        // porque se usar direto "e.currentTarget.value" como retorno da arrow-function,
        // o valor dele está NULO. Porque... não sei... está dentro da arrow-function?
        const valor = e.currentTarget.value.trim()
        if (e.key === 'Enter' && valor.length > 0) {
            e.currentTarget.value = ''
            //setLista([...lista, e.currentTarget.value])
            // ...mas a forma certa de fazer é esta,
            // porque se precisar adicionar 2 itens, na segunda chamada,
            // a variável "lista" ainda não está atualizada.
            setLista((anterior) => {
                if (anterior.includes(valor)) return anterior;
                return [...anterior, valor]
            })
        }
    },
    //[lista])
    [])

    return (
        <div>
            <p>Minha dashboard</p>
            <p>Usuário logado: {nomeDoUsuario}</p>
            <p>Contador: {counterRef.current.counter}</p>
            <button onClick={() => counterRef.current.counter++}>Somar</button>
            <button onClick={() => console.log(counterRef.current.counter)}>Mostrar o contador no console</button>
            <button onClick={logout}>Log out!</button>
            <Link to="/entrar">Login</Link>
            <hr />
            <input
                onKeyDown={handleAdicionarLista}
            />
            <div>
                <p>Lista</p>
                <ul>
                    {lista.map((value, index) => {
                        return <li key={index}>{value}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}