import {
  FormControl,
  Grid,
  InputLabel,
  Select,
  type SelectChangeEvent
} from "@mui/material";
import { dkColors } from "../utils/colors";

export const DKSelect = ({
  label,
  value,
  handleChange,
  selectItems,
  size
}: {
  label: string;
  value: string;
  handleChange: Function;
  selectItems: any[];
  size?: number;
}) => {
  const styles = {
    label: {
      fontFamily: "LuckiestGuy",
      fontSize: "1.5rem",
      color: dkColors.textColor,
      "&.MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: dkColors.outlineColor
        },
        "&:hover fieldset": {
          borderColor: dkColors.focusColor
        },
        "&.Mui-focused fieldset": {
          borderColor: dkColors.focusColor
        }
      }
    },
    menu: {
      MenuProps: {
        MenuListProps: {
          sx: {
            color: dkColors.textColor,
            backgroundColor: dkColors.backgroundColor
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

  const handle = (event: SelectChangeEvent) => {
    return handleChange(event.target.value);
  };

  return (
    <Grid size={size ? size : 3}>
      <FormControl fullWidth>
        <InputLabel id={label.toLowerCase()} sx={styles.label}>
          {label}
        </InputLabel>
        <Select
          labelId={`${label}-label`}
          id={`${label}-select`}
          value={value}
          label={label}
          onChange={handle}
          inputProps={styles.menu}
          sx={styles.label}
        >
          {selectItems}
        </Select>
      </FormControl>
    </Grid>
  );
};
