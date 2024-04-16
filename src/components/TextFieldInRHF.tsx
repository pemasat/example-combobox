import { Controller, useForm, useFormContext } from 'react-hook-form';
import { TextField } from './TextField';
import { FC } from 'react';
import { FieldProps } from './Field.shared';


export const TextFieldInRHF:FC<FieldProps> = ({name, ...props}) => {

	const { control } = useFormContext();

	return (
		<Controller
			name={name}
			control={control}
			rules={{ required: 'Toto pole je povinné' }}
			render={({ field: { onChange, onBlur, value, name, ref }, fieldState: { error } }) => (
				<TextField
               {...props}
               name={name}
					ref={ref}
               onBlur={onBlur}
               placeHolder={value}
					error={error?.message}
					onChange={onChange}
				/>
			)}
		/>

	);

};

