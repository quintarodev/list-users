import { ButtonHTMLAttributes, FC } from "react"
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary"
}
const Button: FC<Props> = ({ variant = "primary", ...rest }: Props) => {
  const styleComponent = variant === "primary" ? "bg-primary-600" : "bg-secondary-600"
  return <button {...rest} className={styleComponent + " py-3 px-6 text-white text-lg font-semibold rounded-lg"} />
}
export default Button
