import { TextField } from "@mui/material";
import { controlProps } from "../../interfaces/controlProps";

export const Password = ({ register, error }: controlProps): JSX.Element => {
  return (
    <TextField
      id="password"
      label="Password"
      variant="outlined"
      size="small"
      type="password"
      fullWidth
      {...register("password", {
        required: "Password is Required",
        pattern: {
          value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,}$/,
          message: "Invalid Password",
        },
      })}
      helperText={error["password"]?.message as string}
      error={Boolean(error["password"]?.message as string)}
    />
  );
};
