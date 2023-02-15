import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { useUsuarioLogado } from "../../shared/hooks"
import { ButtonLogin } from "./components/buttonLogin"
import { InputLogin } from "./components/inputLogin"
export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // guarda uma referência para um elemento HTML.
    const inputPasswordRef = useRef<HTMLInputElement>(null)
    
    const emailLength = useMemo(() => {
        // Não tem a função para definir um valor. Também executa quando uma das dependências muda.
        console.log('Executou')
        return email.length * 1000;
    }, [email.length])
    const handleEntrar = useCallback(() => {
        // useCallback - a função só é reconstruida se um dos estados mudar
        console.log("useCallback: " + email)
    }, [email])
    useEffect(() => {
        // executa quando o EMAIL é alterado... e na carga da página
        console.log(email)
    }, [email])
    useEffect(() => {
        // executa quando a SENHA é alterada... e na carga da página
        console.log(password)
    }, [password])
    const {nomeDoUsuario} = useUsuarioLogado()
    return (
        <div>
            <form>
                <p>Quantidade de caracteres no e-mail: {emailLength}</p>
                <p>Você é: {nomeDoUsuario}</p>
                <InputLogin 
                    label="E-mail"
                    value={email}
                    onChange={newValue => setEmail(newValue)}
                    onPressEnter={() => inputPasswordRef.current?.focus()}
                    />
                <InputLogin
                    label="Senha"
                    type="password"
                    value={password}
                    ref={inputPasswordRef}
                    onChange={newValue => setPassword(newValue)}
                    />
                <ButtonLogin onClick={handleEntrar} type="button">
                    Entrar aqui
                </ButtonLogin>
            </form>
        </div>
    )
}