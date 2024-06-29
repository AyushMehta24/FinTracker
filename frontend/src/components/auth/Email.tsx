import { TextField } from "@mui/material";
import { controlProps } from "../../interfaces/controlProps";

export const Email = ({ register, error }: controlProps) => {
  return (
    <TextField
      id="email"
      label="Email"
      variant="outlined"
      size="small"
      fullWidth
      {...register("email", {
        required: "Email is Required",
        pattern: {
          value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
          message: "Invalid Email",
        },
      })}
      helperText={error["email"]?.message as string}
      error={Boolean(error["email"]?.message as string)}
    />
  );
};
