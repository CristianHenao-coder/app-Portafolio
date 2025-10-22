import { JSX } from "react"
import style from "./button.module.css"


interface ButtonProps {
    label: string,
    icon: React.JSX.Element,
    onClick: ()=> void,
}


export const Button = ({label,onClick,icon}:ButtonProps) => {
  return (

    <button className={style.miButton} onClick={onClick} >
        <div>{label}</div>
        <div>{icon}</div>
    </button>
  )
}