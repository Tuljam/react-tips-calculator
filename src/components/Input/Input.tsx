import { ChangeEvent } from "react";
import { InputPlaceholder } from "../../ul/inputPlaceholder";

import { InputStyled } from "./styles";

interface IProps {
  placeholder: InputPlaceholder;
  onChange: (value: number) => void;
}
export const Input = ({ placeholder, onChange }: IProps) => {
const handleValue = (event:ChangeEvent<HTMLInputElement>) =>{
  onChange(+event.target.value)
}
  return (
    <InputStyled
      type='number'
      onChange={handleValue}
      placeholder={placeholder}
    />
  );
};
