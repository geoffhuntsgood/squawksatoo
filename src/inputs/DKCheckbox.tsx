import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Typography
} from "@mui/material";
import type { ChangeEvent, Dispatch, SetStateAction } from "react";
import { DKTooltip } from "./DKTooltip";

export const DKCheckbox = ({
  label,
  checked,
  handleChange,
  secondary,
  helpText
}: {
  label: string;
  checked: boolean;
  handleChange: Dispatch<SetStateAction<boolean>>;
  secondary?: boolean;
  helpText?: string;
}) => (
  <FormControl fullWidth>
    <FormControlLabel
      label={
        <Typography color="textPrimary" variant="h2">
          {label}
          {helpText && <DKTooltip helpText={helpText} />}
        </Typography>
      }
      control={
        <Checkbox
          sx={secondary ? { paddingLeft: "3rem" } : {}}
          checked={checked}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleChange(event.target.checked)
          }
        />
      }
    />
  </FormControl>
);
