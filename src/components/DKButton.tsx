import { Button, Grid } from "@mui/material";
import { dkColors } from "../utils/colors";

export const DKButton = ({
  label,
  handleClick,
  size
}: {
  label: string;
  handleClick: any;
  size?: number;
}) => {
  const styles = {
    width: "100%",
    height: "100%",
    color: dkColors.textColor,
    fontFamily: "LuckiestGuy",
    fontSize: "2rem",
    backgroundColor: dkColors.buttonColor
  };

  return (
    <Grid size={size ? size : 3}>
      <Button variant="contained" onClick={handleClick} sx={styles}>
        {label}
      </Button>
    </Grid>
  );
};
