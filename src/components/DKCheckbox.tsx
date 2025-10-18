import { Checkbox, FormControlLabel, Grid, Typography } from "@mui/material";
import type { ChangeEvent } from "react";
import { dkColors } from "../utils/colors";

export const DKCheckbox = ({
  label,
  checked,
  handleChange,
  size,
  isArray,
  animate,
  disabled
}: {
  label: string;
  checked: boolean;
  handleChange: Function;
  size?: number;
  isArray?: boolean;
  animate?: boolean;
  disabled?: boolean;
}) => {
  const styles = {
    grid: {
      margin: "0 1rem"
    },
    label: {
      fontFamily: "LuckiestGuy",
      fontSize: "1.3rem",
      textTransform: "uppercase",
      color: disabled ? dkColors.disabledColor : dkColors.textColor,
      textDecoration: animate && checked ? "line-through" : "none"
    },
    checkbox: {
      margin: "0.5rem 0",
      color: dkColors.textColor,
      "&.Mui-checked": {
        color: dkColors.textColor
      },
      "&.Mui-disabled": {
        color: dkColors.disabledColor
      }
    }
  };

  const handle = (event: ChangeEvent<HTMLInputElement>) => {
    if (isArray) {
      return handleChange(label);
    }
    return handleChange(event.target.checked);
  };

  return (
    <Grid size={size ? size : 4} sx={styles.grid}>
      <FormControlLabel
        label={<Typography sx={styles.label}>{label}</Typography>}
        control={
          <Checkbox
            sx={styles.checkbox}
            checked={checked}
            onChange={handle}
            disabled={disabled}
          />
        }
      />
    </Grid>
  );
};
