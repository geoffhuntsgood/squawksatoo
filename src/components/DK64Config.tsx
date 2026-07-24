import { Box, Grid } from "@mui/material";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import type { DK64Item, Options } from "../classes";
import { DK64Category, LevelName } from "../enums";
import { getAllForCategories } from "../levels/levelApi";
import { DKCheckbox, DKMultiSelect, DKSelect } from "../inputs";

export const DK64Config = ({
  setOptions,
  setGoLabel
}: {
  setOptions: Dispatch<SetStateAction<Options | null>>;
  setGoLabel: Dispatch<SetStateAction<string>>;
}) => {
  const [level, setLevel] = useState<string>(LevelName.All);
  const [categories, setCategories] = useState<DK64Category[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [count, setCount] = useState("1");

  const [timer, setTimer] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(false);
  const [iHateMyself, setIHateMyself] = useState(false);

  const [enableCBSanity, setEnableCBSanity] = useState(false);
  const [balloons, setBalloons] = useState(false);
  const [bunches, setBunches] = useState(false);
  const [singles, setSingles] = useState(false);

  const [initialItems, setInitialItems] = useState<DK64Item[]>([]);

  const getCount = () => {
    const range = [];
    const countToUse = initialItems.length > 5 ? 5 : initialItems.length;
    for (let i = 1; i <= countToUse; i++) {
      range.push(`${i}`);
    }
    return range;
  };

  useEffect(() => {
    const levelItems = getAllForCategories(
      [],
      level as LevelName,
      iHateMyself,
      {
        balloons,
        bunches,
        singles
      }
    );
    const cats: DK64Category[] = [];
    levelItems.forEach((item: DK64Item) => {
      if (!cats.includes(item.category as DK64Category)) {
        cats.push(item.category as DK64Category);
      }
    });
    setCategories(cats);
    setInitialItems(levelItems);
  }, [level, iHateMyself, balloons, bunches, singles]);

  useEffect(() => {
    setInitialItems(
      getAllForCategories(
        selectedCategories as DK64Category[],
        level as LevelName,
        iHateMyself,
        {
          balloons,
          bunches,
          singles
        }
      )
    );
  }, [selectedCategories, iHateMyself, balloons, bunches, singles]);

  useEffect(() => {
    if (initialItems.length > 0) {
      setGoLabel(`Get ${count} out of ${initialItems.length}`);
      setOptions({
        initialItems,
        count,
        timer,
        autoRefresh,
        iHateMyself
      });
    }
  }, [
    initialItems,
    count,
    timer,
    autoRefresh,
    iHateMyself,
    setGoLabel,
    setOptions
  ]);

  return (
    <Grid container spacing={1}>
      <Grid size={1} />
      <Grid size={5}>
        <Box sx={{ margin: "10px" }}>
          <DKSelect
            label="Level"
            value={level}
            handleChange={setLevel}
            selectItems={Object.values(LevelName)}
          />
          <DKMultiSelect
            label="Categories (All by default)"
            values={selectedCategories}
            handleChange={setSelectedCategories}
            selectItems={categories}
          />
          <DKSelect
            label="How many at a time?"
            value={count}
            handleChange={setCount}
            selectItems={getCount()}
          />
        </Box>
      </Grid>
      <Grid size={5}>
        <Box sx={{ margin: "10px" }}>
          <DKCheckbox label="Timer" checked={timer} handleChange={setTimer} />
          <DKCheckbox
            label="Auto-refresh"
            checked={autoRefresh}
            handleChange={setAutoRefresh}
          />
          <DKCheckbox
            label="I Hate Myself"
            checked={iHateMyself}
            handleChange={setIHateMyself}
          />
          {level !== LevelName.Helm && level !== LevelName.Isles && (
            <DKCheckbox
              label="Enable CBSanity"
              checked={enableCBSanity}
              handleChange={setEnableCBSanity}
            />
          )}
          {enableCBSanity && (
            <>
              <DKCheckbox
                secondary
                label="Balloons"
                checked={balloons}
                handleChange={setBalloons}
              />
              <DKCheckbox
                secondary
                label="Bunches"
                checked={bunches}
                handleChange={setBunches}
              />
              <DKCheckbox
                secondary
                label="Singles"
                checked={singles}
                handleChange={setSingles}
              />
            </>
          )}
        </Box>
      </Grid>
      <Grid size={1} />
    </Grid>
  );
};
