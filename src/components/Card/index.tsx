import { ReactNode } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    border: boolean;
    children: ReactNode;
}

const Card = ({ border, children, ...props }: Props) => {
    return (
        <div className={`${border && 'shadow-2xl'} ${props.className}`}>
            {children}
        </div>
    )
}

export default Card