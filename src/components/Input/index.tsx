import { InputHTMLAttributes } from "react"

type InputProps = InputHTMLAttributes<HTMLInputElement>

const Input = (props: InputProps) => {

    return (
        <input type="text" {...props} className={`${props.className}`} />
    )
}

export default Input