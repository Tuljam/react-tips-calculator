import Select from 'react-select'
import { SelectStyled } from "./styles"

interface IProps {
  value:string,
  onSelect:(value:string) => void;

  }

interface IOption{
value: string,
label: string,
}
const options:IOption[] = [
  { value: '10%', label: '10%' },
  { value: '15%', label: '15%' },
  { value: '20%', label: '20%' }
]

export const CustomSelect = ({value,onSelect}:IProps) => {
  return (
    <Select options={options}/>
   
  )
}

