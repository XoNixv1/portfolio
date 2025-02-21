import { createContext, ReactNode, useContext, useState } from "react";

interface Context {
  openedForm: boolean;
  openForm: () => void;
  closeForm: () => void;
}

const FormContext = createContext<Context | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [openedForm, setOpenedForm] = useState(false);

  const openForm = (): void => setOpenedForm(true);
  const closeForm = (): void => setOpenedForm(false);

  return (
    <FormContext.Provider value={{ openedForm, openForm, closeForm }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("not in form provider");
  }
  return context;
};
