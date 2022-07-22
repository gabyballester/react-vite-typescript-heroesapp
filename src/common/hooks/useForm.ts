import { useState } from "react";

export const useForm = (initialForm = {}): any => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }: any) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onPropChange = (name: string, value: any) => {
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = (newFormState = initialForm) => {
    setFormState(newFormState);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onPropChange,
    onResetForm,
  };
};
