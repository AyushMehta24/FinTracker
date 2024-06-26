import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export interface controlProps{
    register : UseFormRegister<FieldValues>
    error:FieldErrors<FieldValues>
}