import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";

import { controlProps } from "../../interfaces/controlProps";
import dayjs from "dayjs";

export const DateComponenet = ({ register, error, setError }: controlProps) => {
  const { onChange, onBlur, ref } = register("dob");
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        name="dob"
        label="Date Of Birth"
        onChange={(date) => {
          if (!date || date > dayjs(new Date())) {
            setError &&
              setError("dob", {
                message: `invalid date`,
              });
            return;
          }

          onChange({
            target: {
              name: "dob",
              value: dayjs(date).format("YYYY/MM/DD"),
            },
          });
        }}
        ref={ref}
        slotProps={{
          textField: {
            size: "small",
            helperText: error["dob"]?.message as string,
            error: Boolean(error["dob"]?.message as string),
            ...register("dob", {
              required: "Date Of Birth is required",
            }),
            onBlur: onBlur,
          },
        }}
        format="YYYY-MM-DD"
      />
    </LocalizationProvider>
  );
};
