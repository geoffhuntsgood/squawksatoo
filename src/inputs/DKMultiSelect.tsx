import {
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent
} from "@mui/material";
import type { Dispatch, SetStateAction } from "react";

export const DKMultiSelect = ({
  label,
  values,
  handleChange,
  selectItems
}: {
  label: string;
  values: string[];
  handleChange: Dispatch<SetStateAction<string[]>>;
  selectItems: string[];
}) => {
  const styles = {
    MenuProps: {
      MenuListProps: {
        sx: {
          padding: "0",
          backgroundColor: "#003500",
          "& .MuiMenuItem-root": {
            fontSize: "1.5rem"
          }
        }
      },
      PaperProps: {
        style: {
          maxHeight: "20rem"
        }
      }
    }
  };

  const handle = (event: SelectChangeEvent<typeof values>) => {
    const {
      target: { value }
    } = event;
    if (value.includes("all")) {
      handleChange(values.length > 0 ? [] : selectItems);
    } else {
      handleChange(typeof value === "string" ? value.split(",") : value);
    }
  };

  return (
    <FormControl fullWidth>
      <InputLabel id={`multi-${label}`}>{label}</InputLabel>
      <Select
        multiple
        value={values}
        label={label}
        labelId={`multi-${label}`}
        onChange={handle}
        inputProps={styles}
        renderValue={(selected) => selected.join(", ")}
      >
        <MenuItem value="all">Select/Unselect All</MenuItem>
        {selectItems.map((item: string) => (
          <MenuItem value={item}>
            <Checkbox checked={values.includes(item)} />
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
