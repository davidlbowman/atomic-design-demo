interface ButtonProps {
    children: React.ReactNode
    className?: string
    type?: 'button' | 'submit' | 'reset'
}

export default function Button({ children, className = '', type = 'button' }: ButtonProps) {
    return (
        <button
            type={type}
            className={`bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded ${className}`}
        >
            {children}
        </button>
    )
}
