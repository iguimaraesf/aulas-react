interface ButtonLoginProps {
    type?: "button" | "submit" | "reset"
    onClick: () => void
    children: React.ReactNode
}
export const ButtonLogin: React.FC<ButtonLoginProps> = ({onClick, type, children}) => {
    return (
        <button type={type} onClick={onClick}>
            {children}
        </button>
    )
}