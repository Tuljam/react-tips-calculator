import Select, { SingleValue, StylesConfig } from "react-select";
import {IOption} from '../../types/ioptions' ;
interface IProps {
  value: number;
  setTips: (value: number) => void;
}


export const CustomSelect = ({ value, setTips }: IProps) => {
  const options: IOption[] = [
    { value: 10, label: "10%" },
    { value: 15, label: "15%" },
    { value: 20, label: "20%" },
  ];

  
  const getOptionValue = () =>  options.find(option => {
    return option.value === value;
  } )
  
 

  const handleChangeSelect = (option:SingleValue<IOption>) => {
   if (option) setTips(option.value);
  };



  const customStyles: StylesConfig<IOption> = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#85D3CA" : "transparent",
      color: "black",
      padding: 15,
    }),
    control: (styles) => ({
      ...styles,
      borderRadius: 30,
      border: "none",
      padding: 5,
      textAlign: "center",
      backgroundColor: "#85D3CA",
    }),
    indicatorSeparator:(styles)=> ({
      ...styles,
      width:0,
    }),
    singleValue:(styles) => ({
      ...styles,
      padding:'21px 0px',
      marginLeft:36,
      textAlign:'center',
      color: '#1b1d1d',
      fontFamily: 'inherit',
      fontSize: 18,
    })
  };

  return (
    <Select
     options={options}   
     styles={customStyles}
     value={getOptionValue()}
     isMulti = {false} //запрет на выпор двух вартантов
     isSearchable = {false} //зарет на поиск (написание чего-либо) внутри select
     onChange={handleChangeSelect}
     
    />
  );
};
