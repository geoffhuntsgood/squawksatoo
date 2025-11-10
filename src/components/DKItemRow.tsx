import { Cancel, CheckCircle } from "@mui/icons-material";
import { colors, Grid, IconButton, Typography } from "@mui/material";
import type { MouseEventHandler } from "react";

export const DKItemRow = ({
  name,
  onSuccess,
  onFailure,
  disabled
}: {
  name: string;
  onSuccess: MouseEventHandler;
  onFailure: MouseEventHandler;
  disabled: boolean;
}) => {
  const styles = {
    text: {
      textDecoration: disabled ? "line-through" : "none"
    },
    check: {
      backgroundColor: colors.green[900],
      "&:hover": {
        backgroundColor: "green"
      },
      "&:disabled": {
        backgroundColor: "gray"
      }
    },
    cancel: {
      backgroundColor: colors.red[900],
      "&:hover": {
        backgroundColor: "red"
      },
      "&:disabled": {
        backgroundColor: "gray"
      }
    }
  };

  return (
    <Grid container spacing={1}>
      <Grid size={12} display="flex" justifyContent="center">
        <IconButton sx={styles.check} onClick={onSuccess} disabled={disabled}>
          <CheckCircle />
        </IconButton>
        <Typography color="textPrimary" variant="h3" sx={styles.text}>
          {name}
        </Typography>
        <IconButton sx={styles.cancel} onClick={onFailure} disabled={disabled}>
          <Cancel />
        </IconButton>
      </Grid>
    </Grid>
  );
};
