import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Typography
} from "@mui/material";
import type { ChangeEvent, Dispatch, SetStateAction } from "react";

export const DKCheckbox = ({
  label,
  checked,
  handleChange,
  secondary
}: {
  label: string;
  checked: boolean;
  handleChange: Dispatch<SetStateAction<boolean>>;
  secondary?: boolean;
}) => (
  <FormControl fullWidth>
    <FormControlLabel
      label={
        <Typography color="textPrimary" variant="h2">
          {label}
        </Typography>
      }
      control={
        <Checkbox
          sx={secondary ? { paddingLeft: "2rem" } : {}}
          checked={checked}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleChange(event.target.checked)
          }
        />
      }
    />
  </FormControl>
);
