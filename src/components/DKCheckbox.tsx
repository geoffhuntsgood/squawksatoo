import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import type { ChangeEvent, Dispatch, SetStateAction } from "react";

export const DKCheckbox = ({
  label,
  checked,
  handleChange
}: {
  label: string;
  checked: boolean;
  handleChange: Dispatch<SetStateAction<boolean>>;
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
