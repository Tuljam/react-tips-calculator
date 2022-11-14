import { FormEvent, useEffect } from 'react'
import { useState } from 'react'
import { Button } from '../Button/Button'
import { CustomSelect } from '../CustomSelect/CustomSelect'
import { Input } from '../Input/Input'
import { FormStyled } from './styles'


interface IProps{
children: React.ReactNode;

}
export const Form = ({children}:IProps) => {

  const[isDisabled, setIsDisabled] = useState<boolean>(false);

  const [bill, setBill] = useState<string> ('');
  const [persons, setPersons] = useState <string>('');

  const [tips,setTip] = useState<string>('10')

  const [total, setTotal] = useState <number>(0);

  const handleSubmit =(event: FormEvent <HTMLFormElement>) =>{
   event.preventDefault()
  const totalTips = (+bill * +tips)/100;
  const totalBill = +bill + totalTips;
  setTotal(+(totalBill/ +persons));
  }
  useEffect(() =>
    bill && persons && tips && +bill > 0
      ? setIsDisabled(false)
      : setIsDisabled(true)
  );

  return (
    <FormStyled onSubmit={handleSubmit}>
        {children}
        <Input value = {bill} onChange = {setBill}  label = 'Enter bill'/>
        <Input value = {persons} onChange = {setPersons} label = 'Enter persons'/>
          <CustomSelect value ={tips} onChangeSelect={setTip} />
        <p> Total:{total.toFixed(2)} $</p>
       <Button isDisabled = {isDisabled} />
       
    </FormStyled>
  )
}


