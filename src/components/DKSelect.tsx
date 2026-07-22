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
  selectItems
}: {
  label: string;
  value: string;
  handleChange: Dispatch<SetStateAction<string>>;
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

  return (
    <>
      {selectItems.length > 0 && (
        <FormControl fullWidth>
          <InputLabel id={`select-${label}`}>{label}</InputLabel>
          <Select
            value={value}
            label={label}
            labelId={`select-${label}`}
            onChange={(event: SelectChangeEvent) =>
              handleChange(event.target.value)
            }
            inputProps={styles}
          >
            {selectItems.map((item: string) => (
              <MenuItem value={item}>{item}</MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </>
  );
};
