import { FC, useId, useState } from "react";
import { Error, FieldProps, Input, Label, Wrapper } from './Field.shared';


export const CheckBoxField:FC<FieldProps> = ({
   label,
   placeHolder,
   onChange,
   name,
   disabled,
   error,
}) => {
   const [value, setValue] = useState(placeHolder ?? "");

   const id = useId();

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      onChange?.(e.target.value);
   }

   return (
      <Wrapper>
         <Label htmlFor={`${id}${name}`}>
            <Input type="checkbox" id={`${id}${name}`} name={name} value={value} onChange={handleChange} disabled={disabled} />
            {label}
         </Label>
         {error && <Error>{error}</Error>}
      </Wrapper>
   );
}