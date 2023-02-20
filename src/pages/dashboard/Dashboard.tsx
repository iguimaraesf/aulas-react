import { useCallback, useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { useUsuarioLogado } from "../../shared/hooks"
import { ApiException } from "../../shared/services/api/apiException"
import { ItemTarefa, TarefaService } from "../../shared/services/api/tarefas/tarefaService"

export const Dashboard = () => {
    // contador somente para exemplo do useRef
    const counterRef = useRef({counter: 0})

    const {nomeDoUsuario, logout} = useUsuarioLogado()

    const [lista, setLista] = useState<ItemTarefa[]>([])
    useEffect(() => {
        TarefaService.getAll()
            .then((result) => {
                if (result instanceof ApiException) {
                    alert(result.message)
                } else {
                    setLista(result)
                }
            })
    }, [])
    const handleAdicionarLista: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
        // precisa colocar o valor numa constante primeiro
        // porque se usar direto "e.currentTarget.value" como retorno da arrow-function,
        // o valor dele está NULO. Porque... não sei... está dentro da arrow-function?
        const valor = e.currentTarget.value.trim()
        if (e.key === 'Enter' && valor.length > 0) {
            e.currentTarget.value = ''
            if (lista.some((value) => valor === value.title)) return;

            TarefaService.create({title: valor, isCompleted: false})
                .then((result) => {
                    if (result instanceof ApiException) {
                        alert(`Erro ao inserir: ${result.message}`)
                    } else {
                        //setLista([...lista, e.currentTarget.value])
                        // ...mas a forma certa de fazer é esta,
                        // porque se precisar adicionar 2 itens, na segunda chamada,
                        // a variável "lista" ainda não está atualizada.
                        setLista((anterior) => [...anterior, result])
                    }
                })
        }
    },
    [lista])
//    [])

    const handleToggleComplete = useCallback((id: number) => {
        const tarefaParaAtualizar = lista.find((tarefa) => tarefa.id === id)
        if (!tarefaParaAtualizar) return;

        TarefaService.updateById(id, {
            ...tarefaParaAtualizar, isCompleted: !tarefaParaAtualizar.isCompleted
        })
        .then((result) => {
            if (result instanceof ApiException) {
                alert(`Erro ao atualizar: ${result.message}`)
            } else {
                setLista((listaAnterior) => {
                    return listaAnterior.map(item => {
                        if (item.id === id) return result
                        return item
                    })
                })
            }
        })
    }, [lista])
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
            <p>Selecionados: {lista.filter((item) => item.isCompleted).length}</p>
            <div>
                <p>Lista</p>
                <ul>
                    {lista.map((value) => {
                        // adiciona checked={...} porque quando já vier com valores carregados, mostra corretamente.
                        return <li key={value.id}>
                            <input 
                            type="checkbox"
                            checked={value.isCompleted}
                            onChange={() => handleToggleComplete(value.id)}/>
                            {value.title}
                            </li>
                    })}
                </ul>
            </div>
        </div>
    )
}