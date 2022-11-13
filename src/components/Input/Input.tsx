import { ChangeEvent } from "react";
import { InputPlaceholder } from "../../types/inputPlaceholder";
import { InputStyled } from "./styles";

interface IProps {
  label: InputPlaceholder;
  value: string;
  onChange: (value: string) => void;
}
export const Input = ({ label, value, onChange }: IProps) => {
const handleValue = (event:ChangeEvent<HTMLInputElement>) =>{
  onChange(event.target.value)
}
  return (
    <InputStyled
      type={"text"}
      value={value}
      onChange={handleValue}
      placeholder={label}
    />
  );
};
