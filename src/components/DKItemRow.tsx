import { Cancel, CheckCircle } from "@mui/icons-material";
import { Button, colors, Grid, IconButton, Typography } from "@mui/material";
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
      color: colors.green[900],
      "&:hover": {
        color: "green"
      },
      "&:disabled": {
        color: "gray"
      }
    },
    cancel: {
      color: colors.red[900],
      "&:hover": {
        color: "red"
      },
      "&:disabled": {
        color: "gray"
      }
    }
  };

  return (
    <Grid container spacing={1}>
      <Grid size={12} display="flex" justifyContent="center">
        <IconButton
          sx={styles.check}
          onClick={onSuccess}
          disabled={disabled}
        >
          <CheckCircle />
        </IconButton>
        <Typography color="textPrimary" variant="h3" sx={styles.text}>
          {name}
        </Typography>
        <Button
          sx={styles.cancel}
          onClick={onFailure}
          disabled={disabled}
        >
          <Cancel />
        </Button>
      </Grid>
    </Grid>
  );
};
