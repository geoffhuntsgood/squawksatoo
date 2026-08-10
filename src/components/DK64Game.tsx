import { Grid } from "@mui/material";
import random from "random";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { useStopwatch } from "react-timer-hook";
import type { DK64Item, GameOptions } from "../classes";
import { DKButton, DKItemRow } from "../inputs";
import { getKongColorInfo } from "../utils/levelApi";
import { DKHR } from "./DKHR";
import { GameHeader } from "./GameHeader";

export const DK64Game = ({
  options,
  setOptions,
  setStart
}: {
  options: GameOptions;
  setOptions: Dispatch<SetStateAction<GameOptions | null>>;
  setStart: Dispatch<SetStateAction<boolean>>;
}) => {
  const [available, setAvailable] = useState<DK64Item[]>(options.items);
  const [displayed, setDisplayed] = useState<DK64Item[]>([]);
  const [completed, setCompleted] = useState<DK64Item[]>([]);
  const [total, setTotal] = useState(0);

  const stopwatch = useStopwatch({ autoStart: true, interval: 20 });

  const replaceItem = (displayIndex: number) => {
    const notCompleted = [...available];
    const onDeck = [...displayed];
    const selected = random.choice(notCompleted);

    if (selected) {
      notCompleted.splice(notCompleted.indexOf(selected), 1);
      onDeck.splice(displayIndex, 1, selected);

      setAvailable(notCompleted);
      setDisplayed(onDeck);
    }
  };

  const onComplete = (item: DK64Item, index: number) => {
    const done = [...completed];
    done.push(item);
    setCompleted(done);

    if (options.autoRefresh) {
      replaceItem(index);
    }
  };

  useEffect(() => {
    if (options.seed) {
      random.use(options.seed);
    }

    if (options.autoRefresh) {
      setTotal(options.items.length);
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
        completed={completed.length}
        autoRefresh={options.autoRefresh}
      />

      <DKHR />

      {displayed.length > 0 &&
        displayed.map((item: DK64Item, index: number) => {
          const kongInfo = getKongColorInfo(item.name, options.useKongColors);
          return (
            <DKItemRow
              key={index}
              name={kongInfo.label}
              bgColor={options.useKongColors ? kongInfo.color : "#072207"}
              disabled={completed.indexOf(item) !== -1}
              onSuccess={() => onComplete(item, index)}
            />
          );
        })}

      <DKHR />

      {options.timer && completed.length < total && (
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
