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

  return (
    <>
      {selectItems.length > 0 && (
        <FormControl fullWidth>
          <InputLabel>{label}</InputLabel>
          <Select
            value={value}
            label={label}
            onChange={(event: SelectChangeEvent) =>
              handleChange(event.target.value)
            }
            inputProps={styles.menu}
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
