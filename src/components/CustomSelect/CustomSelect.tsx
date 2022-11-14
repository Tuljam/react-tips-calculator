import Select, {OnChangeValue} from 'react-select'
interface IProps {
  value:string,
  onChangeSelect:(value:string) => void;


  }

interface IOption{
value: string,
label: string,

}


export const CustomSelect = ({value,onChangeSelect}:IProps) => {
const options:IOption[] = [
  { value: '10', label: '10%'},
  { value: '15', label: '15%'},
  { value: '20', label: '20%'}
];
 const getOptionValue = (value: string): IOption | undefined => {
    return value ? options.find((option) => option.value === value) : undefined;
  };

    const handleSelect = (newValue: OnChangeValue<IOption, boolean>) => {
    onChangeSelect((newValue as IOption).value);
  };

  return (
    <Select options={options} value = {getOptionValue(value)} onChange={handleSelect}/>
   
  )
}


