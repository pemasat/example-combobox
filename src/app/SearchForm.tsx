import { CheckBoxField } from "@/components/CheckboxField";
import { TextField } from "@/components/TextField";
import { TextFieldInRHF } from "@/components/TextFieldInRHF";
import { useUniversityQuery } from "@/hooks/useUniversityQuery";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

export const SearchForm = () => {
   const [isDisabled, setIsDisabled] = useState(false);

   const [searchingText, setSearchingText] = useState<string>();

   const {data, isLoading} = useUniversityQuery({name: "test"});

   const handleToggleDisabled = () => {
      setIsDisabled((isDisabled) => !isDisabled);
   }

   const { handleSubmit } = useForm();
   

   const methods = useForm()


   const onSubmit = (data: any) => {
      console.log({data});
      
      setSearchingText(data.search);
   }


   return (
      <FormProvider {...methods}>
         <form onSubmit={handleSubmit(onSubmit)}>
            <TextFieldInRHF label="Search" placeHolder="some place" name="search" disabled={isDisabled}  />
            <CheckBoxField label="Disabled search" placeHolder="some place" name="search" onChange={handleToggleDisabled} />
            <button type="submit">Search</button>
         </form>
      </FormProvider>
   );
};

