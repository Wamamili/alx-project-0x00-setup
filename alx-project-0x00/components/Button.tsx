import { ButtonProps } from "@/interfaces"

const Button: React.FC<ButtonProps> = ({ title, className }) => {
  return (
    <button
      className={`px-4 py-2 font-medium text-white bg-blue-500 ${className}`}
    >
      {title}
    </button>
  )
}

export default Button
