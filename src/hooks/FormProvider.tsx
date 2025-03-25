import { createContext, ReactNode, useContext, useState } from "react";

interface FormContextType {
  openedForm: boolean;
  openForm: () => void;
  closeForm: () => void;
}

const FormContext = createContext<FormContextType | null>(null);

interface FormProviderProps {
  children: ReactNode;
}

export const FormProvider = ({ children }: FormProviderProps) => {
  const [openedForm, setOpenedForm] = useState(false);

  const openForm = () => setOpenedForm(true);
  const closeForm = () => setOpenedForm(false);

  const contextValue: FormContextType = {
    openedForm,
    openForm,
    closeForm,
  };

  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
};

export const useForm = (): FormContextType => {
  const context = useContext(FormContext);

  if (context === null) {
    throw new Error("useForm must be used within a FormProvider");
  }

  return context;
};
