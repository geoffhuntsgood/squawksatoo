import { Grid, Typography } from "@mui/material";
import { dkColors } from "../utils/colors";

export const DKTypography = ({
  text,
  header,
  img
}: {
  text: string;
  header?: boolean;
  img?: boolean;
}) => {
  const styles = {
    text: {
      width: "100%",
      display: "grid",
      justifyContent: "center",
      verticalAlign: "center",
      fontFamily: header ? "Honk" : "LuckiestGuy",
      fontSize: header ? "4rem" : "2rem",
      color: dkColors.textColor
    },
    img: {
      display: "grid",
      alignItems: "center"
    },
    rev: {
      transform: "scaleX(-1)"
    }
  };

  return (
    <>
      <Grid size={3}></Grid>
      {img ? (
        <Grid size={1} sx={styles.img}>
          <img
            src="./img/squawks.png"
            height="50"
            width="50"
            style={styles.img}
          />
        </Grid>
      ) : (
        <Grid size={1}></Grid>
      )}
      <Grid size={4}>
        <Typography sx={styles.text}>{text}</Typography>
      </Grid>
      {img ? (
        <Grid size={1} sx={{ ...styles.img, ...styles.rev }}>
          <img
            src="./img/squawks.png"
            height="50"
            width="50"
            style={styles.img}
          />
        </Grid>
      ) : (
        <Grid size={1}></Grid>
      )}
      <Grid size={3}></Grid>
    </>
  );
};
