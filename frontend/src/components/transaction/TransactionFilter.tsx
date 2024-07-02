import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";

export const TransactionFilter = ({
  name,
  width,
  options,
}: {
  name: string;
  width: number;
  options: string[];
}) => {
  const [value, setvalue] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setvalue(event.target.value);
  };
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: { width } }} size="small">
        <InputLabel id="demo-simple-select-helper-label">{name}</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={value}
          label={name}
          onChange={handleChange}
          sx={{
            borderRadius: 50,
            padding: 0,
            alignItems: "center",
            display: "flex",
          }}
          size="small"
        >
          {options.map((component, i) => (
            <MenuItem value={component} key={i}>
              <span className="capitalize">{component}</span>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
