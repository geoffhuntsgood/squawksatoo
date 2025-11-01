import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import type { ChangeEvent } from "react";

export const DKCheckbox = ({
  label,
  checked,
  handleChange
}: {
  label: string;
  checked: boolean;
  handleChange: Function;
}) => (
  <FormControlLabel
    label={
      <Typography color="textPrimary" variant="h2">
        {label}
      </Typography>
    }
    control={
      <Checkbox
        checked={checked}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          handleChange(event.target.checked)
        }
      />
    }
  />
);
