import { Grid } from "@mui/material";
import random from "random";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { useStopwatch } from "react-timer-hook";
import type { DKBBanana, GameOptions } from "../classes";
import { DKButton, DKItemRow } from "../inputs";
import { DKHR } from "./DKHR";
import { GameHeader } from "./GameHeader";

export const DKBGame = ({
  options,
  setOptions,
  setStart
}: {
  options: GameOptions;
  setOptions: Dispatch<SetStateAction<GameOptions | null>>;
  setStart: Dispatch<SetStateAction<boolean>>;
}) => {
  const [available, setAvailable] = useState<DKBBanana[]>(options.bananas);
  const [displayed, setDisplayed] = useState<DKBBanana[]>([]);
  const [completed, setCompleted] = useState<DKBBanana[]>([]);
  const [total, setTotal] = useState(0);
  const [rightCount, setRightCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);

  const stopwatch = useStopwatch({ autoStart: true, interval: 20 });

  const replaceBanana = (displayIndex: number, success: boolean) => {
    const notCompleted = [...available];
    const onDeck = [...displayed];
    const previous = onDeck[displayIndex];
    const selected = random.choice(notCompleted);

    if (selected) {
      onDeck.splice(displayIndex, 1, selected);
      const index = notCompleted.indexOf(selected);

      if (options.recycle) {
        if (success) {
          notCompleted.splice(index, 1);
        } else {
          notCompleted.splice(index, 1, previous);
        }
      } else {
        notCompleted.splice(index, 1);
      }

      setAvailable(notCompleted);
      setDisplayed(onDeck);
    }
  };

  const onComplete = (banana: DKBBanana, index: number, success: boolean) => {
    if (!options.recycle || (options.recycle && success)) {
      const done = [...completed];
      done.push(banana);
      setCompleted(done);
    }

    if (success) {
      setRightCount(rightCount + 1);
    } else {
      setWrongCount(wrongCount + 1);
    }

    if (options.autoRefresh) {
      replaceBanana(index, success);
    }
  };

  useEffect(() => {
    if (options.seed) {
      random.use(options.seed);
    }

    if (options.autoRefresh) {
      setTotal(options.bananas.length);
    } else {
      setTotal(Number(options.count));
    }

    const notCompleted = [...available];
    const onDeck = [];

    for (let i = 0; i < Number(options.count); i++) {
      const selected = random.choice(notCompleted);

      if (selected) {
        notCompleted.splice(notCompleted.indexOf(selected), 1);
        onDeck.push(selected);
      }
    }

    setAvailable(notCompleted);
    setDisplayed(onDeck);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid container spacing={1}>
      <GameHeader
        timer={options.timer}
        stopwatch={stopwatch}
        total={total}
        completed={rightCount}
        autoRefresh={options.autoRefresh}
        failures={wrongCount}
        recycle={options.recycle}
      />

      <DKHR />

      {displayed.length > 0 &&
        displayed.map((banana: DKBBanana, index: number) => (
          <DKItemRow
            key={index}
            name={banana.name}
            bgColor="#072207"
            disabled={completed.indexOf(banana) !== -1}
            onSuccess={() => onComplete(banana, index, true)}
            onFailure={() => onComplete(banana, index, false)}
          />
        ))}

      <DKHR />

      {options.timer &&
        ((!options.recycle && rightCount + wrongCount < total) ||
          (options.recycle && rightCount < total)) && (
          <DKButton
            label={stopwatch.isRunning ? "Pause" : "Resume"}
            handleClick={() =>
              stopwatch.isRunning ? stopwatch.pause() : stopwatch.start()
            }
          />
        )}

      <DKButton
        label="Reconfigure"
        handleClick={() => {
          setOptions(null);
          setStart(false);
        }}
      />
    </Grid>
  );
};
