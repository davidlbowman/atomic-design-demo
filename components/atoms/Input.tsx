interface InputProps {
    type: string
    id: string
    name: string
    placeholder?: string
    className?: string
    autoComplete?: string
}

export default function Input({
    type,
    id,
    name,
    placeholder,
    className = '',
    autoComplete = 'off'
}: InputProps) {
    return (
        <input
            type={type}
            id={id}
            name={name}
            placeholder={placeholder}
            autoComplete={autoComplete}
            className={`border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none rounded-md shadow-sm p-2 ${className}`}
        />
    )
}
