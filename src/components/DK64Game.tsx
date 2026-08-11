import { Grid } from "@mui/material";
import random from "random";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { useStopwatch } from "react-timer-hook";
import type { DK64Item, GameOptions } from "../classes";
import { DK64Category } from "../enums";
import { DKButton, DKDialog, DKHR, DKItemRow } from "../inputs";
import { getKongColorInfo } from "../utils/levelApi";
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
  const [reconfigOpen, setReconfigOpen] = useState(false);
  const [available, setAvailable] = useState<DK64Item[]>([]);
  const [displayed, setDisplayed] = useState<DK64Item[]>([]);
  const [completed, setCompleted] = useState<DK64Item[]>([]);
  const [total] = useState(
    options.autoRefresh ? options.dk64Total : options.count
  );

  const stopwatch = useStopwatch({ autoStart: true, interval: 20 });

  const replaceItem = (displayIndex: number) => {
    const notCompleted = [...available];
    const onDeck = [...displayed];
    const nextUp = notCompleted.shift();

    if (nextUp) {
      onDeck.splice(displayIndex, 1, nextUp);

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

  const reset = () => {
    setOptions(null);
    setStart(false);
  };

  useEffect(() => {
    if (options.seed) {
      random.use(options.seed);
    }

    const notCompleted = [];
    const initial = [...options.items];
    for (let i = 0; i < total; i++) {
      const item = random.choice(initial);

      if (item) {
        initial.splice(initial.indexOf(item), 1);

        if (item.category === DK64Category.ColoredBanana) {
          const itemCopy = { ...item };
          itemCopy.name = item.name.replace(
            "{{X}}",
            String(random.int(20, 100))
          );
          notCompleted.push(itemCopy);
        } else {
          notCompleted.push(item);
        }
      }
    }

    const onDeck = [];
    for (let i = 0; i < options.count; i++) {
      const item = notCompleted.shift();
      if (item) {
        onDeck.push(item);
      }
    }

    setAvailable(notCompleted);
    setDisplayed(onDeck);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid container spacing={1}>
      <DKDialog
        title="Are you sure?"
        description="You'll lose your current progress!"
        open={reconfigOpen}
        setOpen={setReconfigOpen}
        yesLabel="Yeah"
        noLabel="Nah"
        handleYesAction={reset}
        handleNoAction={() => stopwatch.start()}
      />

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
          if (completed.length < total) {
            stopwatch.pause();
            setReconfigOpen(true);
          } else {
            reset();
          }
        }}
      />
    </Grid>
  );
};
