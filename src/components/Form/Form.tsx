// import { timeStamp } from 'console'
import { FormEvent } from 'react'
import { useState } from 'react'
import { StringLiteralType } from 'typescript'
import { Button } from '../Button/Button'
import { CustomSelect } from '../CustomSelect/CustomSelect'
import { Input } from '../Input/Input'
import { FormStyled } from './styles'
import Select from 'react-select'

interface IProps{
children: React.ReactNode;

}
export const Form = ({children}:IProps) => {
  // button
  const[isDisabled, setIsDisabled] = useState<boolean>(false)
// input
  const [bill, setBill] = useState<string> ('')
  const [persons, setPersons] = useState <string>('')

// select
  const [tips,setTip] = useState<string>('10')
// total
  const [total, setTotal] = useState <number>(0)

  const handleSubmit =(event: FormEvent <HTMLFormElement>) =>{
   event.preventDefault()
  const totalTips = +bill / +tips;
  const totalBill = +bill + totalTips;
  setTotal(+(totalBill/ +persons).toFixed(2))
  
   
  }
  return (
    <FormStyled onSubmit={handleSubmit}>
        {children}
        <Input value = {bill} onChange = {setBill}  label = 'Enter bill'/>
        <Input value = {persons} onChange = {setPersons} label = 'Enter persons'/>
        <CustomSelect value ={tips} />
        <p> Total:{total} $</p>
       <Button isDisabled = {isDisabled} />
       
    </FormStyled>
  )
}

