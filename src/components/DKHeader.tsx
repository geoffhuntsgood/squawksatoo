import { Card, Typography } from "@mui/material";

export const DKHeader = () => {
  const styles = {
    img: {
      height: "3rem",
      width: "3rem"
    },
    rev: {
      transform: "scaleX(-1)"
    }
  };

  return (
    <Card>
      <img src="./img/squawks.png" style={styles.img} />
      <Typography color="textPrimary" variant="h1">
        Squawksatoo
      </Typography>
      <img src="./img/squawks.png" style={{ ...styles.img, ...styles.rev }} />
    </Card>
  );
};
