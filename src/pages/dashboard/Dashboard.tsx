import { useCallback, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { useUsuarioLogado } from "../../shared/hooks"

interface ItemDaLista {
    title: string
    isSelected: boolean
}
export const Dashboard = () => {
    // contador somente para exemplo do useRef
    const counterRef = useRef({counter: 0})

    const {nomeDoUsuario, logout} = useUsuarioLogado()

    const [lista, setLista] = useState<ItemDaLista[]>([])
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
                if (anterior.some((value) => valor === value.title)) return anterior;
                return [...anterior, {
                    title: valor, isSelected: false
                }]
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
            <p>Selecionados: {lista.filter((item) => item.isSelected).length}</p>
            <div>
                <p>Lista</p>
                <ul>
                    {lista.map((value, index) => {
                        // adiciona checked={...} porque quando já vier com valores carregados, mostra corretamente.
                        return <li key={index}>
                            <input 
                            type="checkbox"
                            checked={value.isSelected}
                            onChange={() => {
                                setLista((listaAnterior) => {
                                    return listaAnterior.map(item => {
                                        const selecionei = item.title === value.title ? !item.isSelected : item.isSelected                                        
                                        return {...item, isSelected: selecionei}
                                    })
                                })
                            }}
                            />
                            {value.title}
                            </li>
                    })}
                </ul>
            </div>
        </div>
    )
}