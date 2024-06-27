import { TextField } from "@mui/material";
import { commonTextControlProps } from "../../interfaces/controlProps";

export const Text = ({ register, error, fieldId, fieldName ,validate}: commonTextControlProps) => {
  return (
    <TextField
      id={fieldId}
      label={fieldName}
      variant="outlined"
      size="small"
      fullWidth
      {...register(fieldId, validate)}
      helperText={error[fieldId]?.message as string}
      error={Boolean(error[fieldId]?.message as string)}
    />
  );
};
