import Cancel from "@mui/icons-material/Cancel";
import CheckCircle from "@mui/icons-material/CheckCircle";
import { colors, Grid, IconButton, Typography } from "@mui/material";
import type { MouseEventHandler } from "react";

export const DKItemRow = ({
  name,
  disabled,
  onSuccess,
  onFailure
}: {
  name: string;
  disabled: boolean;
  onSuccess: MouseEventHandler;
  onFailure?: MouseEventHandler;
}) => {
  const styles = {
    text: {
      textDecoration: disabled ? "line-through" : "none"
    },
    check: {
      color: colors.green[900],
      "&:hover": {
        color: "green"
      }
    },
    cancel: {
      color: colors.red[900],
      "&:hover": {
        color: "red"
      }
    }
  };

  return (
    <Grid size={12}>
      <Typography color="textPrimary" variant="h3" sx={styles.text}>
        <IconButton sx={styles.check} onClick={onSuccess} disabled={disabled}>
          <CheckCircle />
        </IconButton>
        {name}
        {onFailure && (
          <IconButton
            sx={styles.cancel}
            onClick={onFailure}
            disabled={disabled}
          >
            <Cancel />
          </IconButton>
        )}
      </Typography>
    </Grid>
  );
};
