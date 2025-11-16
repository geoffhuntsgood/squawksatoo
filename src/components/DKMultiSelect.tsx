import {
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent
} from "@mui/material";
import type { Dispatch, SetStateAction } from "react";
import type { Category } from "../enums/Category";

export const DKMultiSelect = ({
  label,
  values,
  handleChange,
  selectItems
}: {
  label: string;
  values: string[];
  handleChange: Dispatch<SetStateAction<Category[]>>;
  selectItems: string[];
}) => {
  const styles = {
    menu: {
      MenuProps: {
        MenuListProps: {
          sx: {
            color: "#fff",
            backgroundColor: "#212121"
          }
        },
        PaperProps: {
          style: {
            maxHeight: 200
          }
        }
      }
    }
  };

  const handle = (event: SelectChangeEvent<typeof values>) => {
    const {
      target: { value }
    } = event;
    if (value.includes("all")) {
      handleChange(values.length > 0 ? [] : [...(selectItems as Category[])]);
    } else {
      handleChange(
        typeof value === "string"
          ? (value.split(",") as Category[])
          : (value as Category[])
      );
    }
  };

  return (
    <FormControl fullWidth>
      <InputLabel id={`multi-${label}`}>{label}</InputLabel>
      <Select
        multiple
        labelId={`multi-${label}`}
        value={values}
        onChange={handle}
        inputProps={styles.menu}
        renderValue={(selected) => selected.join(", ")}
      >
        <MenuItem value="all">Select/Deselect All</MenuItem>
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
