import { Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useReward } from "react-rewards";
import { useStopwatch } from "react-timer-hook";
import { Banana } from "../classes/Banana";
import { DKButton } from "./DKButton";
import { DKHeader } from "./DKHeader";
import { DKItemRow } from "./DKItemRow";

export const Game = ({
  layerBananas,
  setPlaying,
  count,
  setCount,
  timer,
  continuous
}: {
  layerBananas: Banana[];
  setPlaying: Function;
  count: string;
  setCount: Function;
  timer: boolean;
  continuous: boolean;
}) => {
  const [header, setHeader] = useState("");
  const [available, setAvailable] = useState<Banana[]>([]);
  const [displayed, setDisplayed] = useState<Banana[]>([]);
  const [failureCount, setFailureCount] = useState(0);
  const [disabled, setDisabled] = useState<string[]>([]);

  const rewardOptions = {
    lifetime: 5000,
    spread: 180,
    elementCount: 50,
    zIndex: 9999,
    emoji: ["🍌"]
  };

  const { reward: reward1 } = useReward("finished", "emoji", rewardOptions);
  const { reward: reward2 } = useReward("done", "emoji", rewardOptions);

  const {
    milliseconds,
    seconds,
    minutes,
    hours,
    isRunning,
    start,
    pause,
    reset
  } = useStopwatch({ autoStart: true, interval: 20 });

  const markDisabled = (displayIndex: number, set: string) => {
    const dis = [...disabled];
    dis[displayIndex] = set;
    setDisabled(dis);
  };

  const initSelection = () => {
    const nans = [...layerBananas];
    const shown = [];
    const dis = [];
    if (disabled.length > 0) {
      setDisabled([]);
    }

    for (let i = 0; i < Number(count); i++) {
      const index = Math.floor(Math.random() * nans.length);
      shown.push(nans[index]);
      nans.splice(index, 1);
      dis.push("false");
    }
    setAvailable(nans);
    setDisplayed(shown);
    setDisabled(dis);
  };

  const replaceOne = (displayIndex: number) => {
    const nans = [...available];
    const shown = [...displayed];

    if (nans.length > 0) {
      const index = Math.floor(Math.random() * nans.length);
      shown.splice(displayIndex, 1, nans[index]);
      nans.splice(index, 1);
      markDisabled(displayIndex, "false");
      setAvailable(nans);
      setDisplayed(shown);
    } else {
      markDisabled(displayIndex, "true");
    }
  };

  const onSuccess = (index: number) => {
    if (continuous) {
      replaceOne(index);
    } else {
      markDisabled(index, "true");
    }
  };

  const onFailure = (index: number) => {
    setFailureCount(failureCount + 1);
    onSuccess(index);
  };

  const refresh = () => {
    initSelection();
    setFailureCount(0);
    reset();
  };

  const reconfig = () => {
    setAvailable([]);
    setDisplayed([]);
    setDisabled([]);
    setCount("1");
    setFailureCount(0);
    setPlaying(false);
  };

  useEffect(() => {
    initSelection();
  }, []);

  useEffect(() => {
    if (disabled.length > 0) {
      if (disabled.every((item) => item === "true")) {
        setHeader("GG!");
        pause();
        reward1();
        reward2();
      } else {
        if (continuous) {
          setHeader(
            `${available.length === 0 ? "None" : available.length} left!`
          );
        } else {
          setHeader("Go get 'em!");
        }
      }
    }
  }, [disabled]);

  const styles = {
    timer: {
      animation: "pauseTimer 2s infinite"
    },
    wrong: {
      animation:
        failureCount > 0
          ? "wrongCounter 2s infinite"
          : "rightCounter 2s infinite"
    }
  };

  return (
    <Grid container spacing={1}>
      <Grid size={12}>
        <DKHeader />
      </Grid>

      <Grid size={12}>
        <Typography color="textPrimary" variant="h1">
          {header}
        </Typography>
        <div id="finished"></div>
        <div id="done" style={{ float: "right" }}></div>
      </Grid>

      <Grid size={12}>
        <hr />
      </Grid>

      {displayed.length > 0 &&
        displayed.map((banana: Banana, index: number) => {
          return (
            <DKItemRow
              key={index}
              name={banana.name}
              onSuccess={() => onSuccess(index)}
              onFailure={() => onFailure(index)}
              disabled={disabled[index] === "true"}
            />
          );
        })}

      <Grid size={12}>
        <hr />
      </Grid>

      <Grid size={6}>
        <Typography
          color="textPrimary"
          variant="h1"
          sx={!isRunning ? styles.wrong : {}}
        >
          Wrong: {failureCount}
        </Typography>
      </Grid>
      <Grid size={6}>
        {timer && (
          <Button
            variant="text"
            sx={{ padding: "0" }}
            onClick={() => (isRunning ? pause() : start())}
          >
            <Typography
              color="textPrimary"
              variant="h1"
              sx={!isRunning ? styles.timer : {}}
            >
              {String(hours).padStart(2, "0")}:
              {String(minutes).padStart(2, "0")}:
              {String(seconds).padStart(2, "0")}.
              {String(milliseconds).slice(0, 2)}
            </Typography>
          </Button>
        )}
      </Grid>

      <DKButton label="Start over" handleClick={refresh} />
      <DKButton label="Reconfigure" handleClick={reconfig} />
    </Grid>
  );
};
