
import { FormEvent, useEffect } from "react";
import { useState } from "react";
import { IOption } from "../../types/ioptions";
import { Button } from "../Button/Button";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { Input } from "../Input/Input";
import { FormStyled } from "./styles";

interface IProps {
  children: React.ReactNode;
}
export const Form = ({ children }: IProps) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const [bill, setBill] = useState<number>(0);
  const [persons, setPersons] = useState<number>(0);

  // const [tips, setTips] = useState<IOption[] >(options[0].value); - не получилось
const [tips, setTips] = useState<number>(10);
  const [total, setTotal] = useState<number>(0);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const totalTips = (bill * tips) / 100;
    const totalBill = bill + totalTips;
    setTotal(+(totalBill / persons));
  };
  useEffect(() =>
    bill && persons && tips && +bill > 0
      ? setIsDisabled(false)
      : setIsDisabled(true)
  );

  return (
    <FormStyled onSubmit={handleSubmit}>
      {children}
      <Input placeholder ="Enter bill" onChange={setBill}  />
      <Input placeholder="Enter persons"  onChange={setPersons}  />
      <CustomSelect value={tips} setTips={setTips} />
      <p className="form__total"> Total:{total.toFixed(2)} $</p>
      <Button isDisabled={isDisabled} />
    </FormStyled>
  );
};
