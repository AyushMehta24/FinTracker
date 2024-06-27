import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormSetError,
} from "react-hook-form";

export interface controlProps {
  register: UseFormRegister<FieldValues>;
  error: FieldErrors<FieldValues>;
  setError?: UseFormSetError<FieldValues>;
}

export interface commonTextControlProps {
  register: UseFormRegister<FieldValues>;
  error: FieldErrors<FieldValues>;
  fieldId: string;
}
