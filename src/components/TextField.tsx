import { forwardRef, useId, useState } from 'react';
import { Error, FieldProps, Input, Label, Wrapper } from './Field.shared';



export const TextField = forwardRef<HTMLInputElement, FieldProps>(({
	label,
	placeHolder,
	onChange,
	name,
	disabled,
	error,
	onBlur,
}, ref) => {
	const [value, setValue] = useState(placeHolder ?? '');


	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
		onChange?.(e.target.value);
	};
	

   const id = useId();

	return (
		<Wrapper>
			<Label htmlFor={`${id}${name}`}>{label}</Label>
			<Input id={`${id}${name}`} ref={ref} name={name} value={value} onChange={handleChange} disabled={disabled} onBlur={onBlur} />
			{error && <Error>{error}</Error>}
		</Wrapper>
	);
});

TextField.displayName = 'TextField';