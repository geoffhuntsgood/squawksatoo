import CheckCircle from "@mui/icons-material/CheckCircle";
import { Grid, IconButton, Typography } from "@mui/material";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { useReward } from "react-rewards";
import { useStopwatch } from "react-timer-hook";
import type { DK64Item } from "../classes/DK64Item";
import type { Options } from "../classes/Options";
import { DKButton } from "./DKButton";
import { DKItemRow } from "./DKItemRow";
import { DKTimer } from "./DKTimer";

export const DK64Game = ({
  options,
  setOptions,
  setStart
}: {
  options: Options;
  setOptions: Dispatch<SetStateAction<Options | null>>;
  setStart: Dispatch<SetStateAction<boolean>>;
}) => {
  const [header, setHeader] = useState("");
  const [available, setAvailable] = useState<DK64Item[]>([]);
  const [displayed, setDisplayed] = useState<DK64Item[]>([]);
  const [doneCount, setDoneCount] = useState(0);
  const [disabled, setDisabled] = useState<string[]>([]);

  const stopwatch = useStopwatch({ autoStart: true, interval: 20 });

  const rewardOptions = {
    lifetime: 5000,
    spread: 180,
    elementCount: 50,
    zIndex: 9999,
    emoji: ["🍌"]
  };

  const { reward: reward1 } = useReward("finished", "emoji", rewardOptions);
  const { reward: reward2 } = useReward("done", "emoji", rewardOptions);

  const markDisabled = (displayIndex: number, set: string) => {
    const dis = [...disabled];
    dis[displayIndex] = set;
    setDisabled(dis);
  };

  const initSelection = () => {
    const items = [...options.initialItems] as DK64Item[];

    const shown = [];
    const dis = [];
    if (disabled.length > 0) {
      setDisabled([]);
    }

    for (let i = 0; i < Number(options.count); i++) {
      const index = Math.floor(Math.random() * items.length);
      shown.push(items[index]);
      items.splice(index, 1);
      dis.push("false");
    }
    setAvailable(items);
    setDisplayed(shown);
    setDisabled(dis);
  };

  const replaceOne = (displayIndex: number) => {
    const items = [...available];
    const shown = [...displayed];

    if (items.length > 0) {
      const index = Math.floor(Math.random() * items.length);
      shown.splice(displayIndex, 1, items[index]);
      items.splice(index, 1);

      markDisabled(displayIndex, "false");
      setAvailable(items);
      setDisplayed(shown);
    } else {
      markDisabled(displayIndex, "true");
    }
  };

  const onComplete = (index: number) => {
    setDoneCount(doneCount + 1);
    if (options.autoRefresh) {
      replaceOne(index);
    } else {
      markDisabled(index, "true");
    }
  };

  const getHR = () => (
    <Grid size={12}>
      <hr style={{ border: "2px solid darkgreen" }} />
    </Grid>
  );

  useEffect(() => {
    initSelection();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (disabled.length > 0) {
      if (disabled.every((item) => item === "true")) {
        setHeader("GG!");
        stopwatch.pause();
        reward1();
        reward2();
      } else {
        if (options.autoRefresh) {
          setHeader(
            `${available.length === 0 ? "None" : available.length} left`
          );
        } else {
          setHeader("Go get 'em!");
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disabled]);

  const styles = {
    icon: {
      color: "white"
    },
    correct: {
      animation: "rightCounter 2s infinite"
    }
  };

  return (
    <Grid container spacing={1}>
      <Grid size={4}>
        <Typography color="textPrimary" variant="h1">
          {header}
        </Typography>
        <div id="finished" />
      </Grid>
      <Grid size={4}>
        <Typography
          color="textPrimary"
          variant="h1"
          sx={!stopwatch.isRunning ? styles.correct : {}}
        >
          <IconButton sx={!stopwatch.isRunning ? styles.correct : styles.icon}>
            <CheckCircle />
          </IconButton>
          {doneCount} Complete
        </Typography>
      </Grid>
      <Grid size={4}>
        {options.timer && <DKTimer stopwatch={stopwatch} />}
        <div id="done" style={{ float: "right" }} />
      </Grid>

      {getHR()}

      {displayed.length > 0 &&
        displayed.map((item: DK64Item, index: number) => {
          return (
            <DKItemRow
              key={index}
              name={item.name}
              disabled={disabled[index] === "true"}
              onSuccess={() => onComplete(index)}
            />
          );
        })}

      {getHR()}

      <DKButton
        label="Start over"
        handleClick={() => {
          initSelection();
          setDoneCount(0);
          stopwatch.reset();
        }}
      />
      <DKButton
        label="Reconfigure"
        handleClick={() => {
          setOptions(null);
          setStart(false);
          stopwatch.reset();
        }}
      />
    </Grid>
  );
};
