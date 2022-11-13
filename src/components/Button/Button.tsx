// import { buttonContent } from "../../types/buttonContent"
import { ButtonStyled } from "./stales"

// interface IProps {
//   label:buttonContent;
// }

// export const Button = ({label}:IProps) => {
//   return (
//     <ButtonStyled>{label}</ButtonStyled>
//   )
// }


interface IProps {
isDisabled:boolean;
}

export const Button = ({isDisabled}:IProps) => {
  return (
    <ButtonStyled disabled = {isDisabled} type= 'submit' > 'Ohhhoooo 🍻'</ButtonStyled>
  )}


