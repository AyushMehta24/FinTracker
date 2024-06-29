import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import { radioControlProps } from "../../interfaces/controlProps";

export const RadioButton = ({ register }: radioControlProps) => {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Role</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={"1"}
      >
        <FormControlLabel
          value={"2"}
          name="role"
          control={<Radio {...register("role")} />}
          label="Admin"
        />
        <FormControlLabel
          value={"1"}
          name="role"
          control={<Radio {...register("role")} />}
          label="Employee"
        />
      </RadioGroup>
    </FormControl>
  );
};
