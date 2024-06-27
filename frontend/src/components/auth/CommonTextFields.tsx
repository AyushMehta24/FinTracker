import { TextField } from "@mui/material";
import { commonTextControlProps } from "../../interfaces/controlProps";

export const Text = ({ register, error, fieldId }: commonTextControlProps) => {
  return (
    <TextField
      id={fieldId}
      label={fieldId}
      variant="outlined"
      size="small"
      fullWidth
      {...register(fieldId, {
        required: `${fieldId} is Required`,
        // pattern: {
        //   value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        //   message: `Invalid ${fieldId.toUpperCase()}`,
        // },
      })}
      helperText={error[fieldId]?.message as string}
      error={Boolean(error[fieldId]?.message as string)}
    />
  );
};
