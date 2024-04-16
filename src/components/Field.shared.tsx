import styled from '@emotion/styled';

export interface FieldProps {
   label: string;
   placeHolder?: string;
   onChange?: (value: string) => void;
   name: string;
   disabled?: boolean;
   error?: string;
   onBlur?: () => void;
}



export const Wrapper = styled.p`
   display: flex;
   flex-direction: column;
   margin-bottom: 16px;
   gap: 8px;
   align-items: flex-start;
`;

export const Label = styled.label`
   display: flex;
   gap: 8px;
`;

export const Input = styled.input``;

export const Error = styled.em`
   color: red;
   font-size: 0.8em;

`;