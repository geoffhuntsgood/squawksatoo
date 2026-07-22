import { Box, Grid } from "@mui/material";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import type { DK64Item } from "../classes/DK64Item";
import type { DK64Category } from "../enums/DK64Category";
import { LevelName } from "../enums/LevelName";
import { getAllCollectablesForCategories } from "../levels/levelApi";
import { DKCheckbox } from "./DKCheckbox";
import { DKMultiSelect } from "./DKMultiSelect";
import { DKSelect } from "./DKSelect";
import type { Options } from "../classes/Options";

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
  const [autoRefresh, setAutoRefresh] = useState(true);

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
    const levelItems = getAllCollectablesForCategories([], level as LevelName);
    const cats: DK64Category[] = [];
    levelItems.forEach((item: DK64Item) => {
      if (!cats.includes(item.category)) {
        cats.push(item.category);
      }
    });
    setCategories(cats);
    setInitialItems(levelItems);
  }, [level]);

  useEffect(() => {
    setInitialItems(
      getAllCollectablesForCategories(
        selectedCategories as DK64Category[],
        level as LevelName
      )
    );
  }, [selectedCategories]);

  useEffect(() => {
    if (initialItems.length > 0) {
      setGoLabel(`Get ${count} out of ${initialItems.length}`);
      setOptions({
        initialItems,
        count,
        timer,
        autoRefresh
      });
    }
  }, [initialItems, count]);

  return (
    <Grid container spacing={1}>
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
            label="Count"
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
        </Box>
      </Grid>
    </Grid>
  );
};
