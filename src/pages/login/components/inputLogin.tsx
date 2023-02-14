interface InputLoginProps {
    type?: string
    label: string
    value: string
    onChange: (newValue: string) => void
    onPressEnter?: () => void
}

export const InputLogin: React.FC<InputLoginProps> = (props) => {
    return (
        <label>
            <span>{props.label}</span>
            <input value={props.value}
                type={props.type}
                onChange={e => props.onChange(e.target.value)}
                onKeyDown={e => e.key === 'Enter'
                    ? props.onPressEnter && props.onPressEnter()
                    : undefined}/>
        </label>
    )
}