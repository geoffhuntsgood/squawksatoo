import { Typography } from "@mui/material";

export const DKTimer = ({ stopwatch }: { stopwatch: any }) => {
  const { seconds, minutes, hours, isRunning } = stopwatch;

  return (
    <Typography
      color="textPrimary"
      variant="h1"
      sx={!isRunning ? { animation: "pauseTimer 2s infinite" } : {}}
    >
      {hours}:{String(minutes).padStart(2, "0")}:
      {String(seconds).padStart(2, "0")}
    </Typography>
  );
};
