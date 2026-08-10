import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent
} from "@mui/material";
import type { Dispatch, SetStateAction } from "react";

export const DKSelect = ({
  label,
  value,
  handleChange,
  selectItems,
  mini
}: {
  label: string;
  value: string;
  handleChange: Dispatch<SetStateAction<string>>;
  selectItems: string[];
  mini?: boolean;
}) => (
  <>
    {selectItems.length > 0 && (
      <FormControl fullWidth sx={{ width: mini ? "50%" : "100%" }}>
        <InputLabel id={`select-${label}`}>{label}</InputLabel>
        <Select
          value={value}
          label={label}
          labelId={`select-${label}`}
          onChange={(event: SelectChangeEvent) =>
            handleChange(event.target.value)
          }
        >
          {selectItems.map((item: string) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>
    )}
  </>
);
