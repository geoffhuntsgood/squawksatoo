import { Box, Grid } from "@mui/material";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { DKBBanana } from "../classes/DKBBanana";
import type { Options } from "../classes/Options";
import type { DKBCategory } from "../enums/DKBCategory";
import { LayerName } from "../enums/LayerName";
import {
  getAllBananasForCategories,
  getLayerBananas
} from "../layers/layerApi";
import { DKCheckbox } from "./DKCheckbox";
import { DKMultiSelect } from "./DKMultiSelect";
import { DKSelect } from "./DKSelect";

export const DKBConfig = ({
  setOptions,
  setGoLabel
}: {
  setOptions: Dispatch<SetStateAction<Options | null>>;
  setGoLabel: Dispatch<SetStateAction<string>>;
}) => {
  const [layer, setLayer] = useState<string>(LayerName.Ingot);
  const [categories, setCategories] = useState<DKBCategory[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [count, setCount] = useState("1");

  const [includePostgame, setIncludePostgame] = useState(false);
  const [timer, setTimer] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [recycleWrong, setRecycleWrong] = useState(false);
  const [iHateMyself, setIHateMyself] = useState(false);

  const [initialItems, setInitialItems] = useState<DKBBanana[]>([]);

  const getCount = () => {
    const range = [];
    const countToUse = initialItems.length > 5 ? 5 : initialItems.length;
    for (let i = 1; i <= countToUse; i++) {
      range.push(`${i}`);
    }
    return range;
  };

  useEffect(() => {
    const layerNans = getLayerBananas(
      layer as LayerName,
      includePostgame,
      iHateMyself
    );
    const cats: DKBCategory[] = [];
    layerNans.forEach((nan: DKBBanana) => {
      if (nan.category && !cats.includes(nan.category)) {
        cats.push(nan.category);
      }
      if (nan.category2 && !cats.includes(nan.category2)) {
        cats.push(nan.category2);
      }
    });
    setCategories(cats);
    const initialNans = getAllBananasForCategories(
      layer as LayerName,
      [],
      includePostgame,
      iHateMyself
    );
    setInitialItems(initialNans);
  }, [layer, includePostgame, iHateMyself]);

  useEffect(() => {
    setInitialItems(
      getAllBananasForCategories(
        layer as LayerName,
        selectedCategories as DKBCategory[],
        includePostgame,
        iHateMyself
      )
    );
  }, [selectedCategories, includePostgame, iHateMyself]);

  useEffect(() => {
    if (initialItems.length > 0) {
      setGoLabel(`Get ${count} out of ${initialItems.length}`);
      setOptions({
        initialItems,
        count,
        includePostgame,
        timer,
        autoRefresh,
        recycleWrong,
        iHateMyself
      });
    }
  }, [
    initialItems,
    count,
    includePostgame,
    timer,
    autoRefresh,
    recycleWrong,
    iHateMyself
  ]);

  return (
    <Grid container spacing={1}>
      <Grid size={1} />
      <Grid size={5}>
        <Box sx={{ margin: "10px" }}>
          <DKSelect
            label="Layer"
            value={layer}
            handleChange={setLayer}
            selectItems={Object.values(LayerName)}
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
          <DKCheckbox
            label="Include Postgame"
            checked={includePostgame}
            handleChange={setIncludePostgame}
          />
          <DKCheckbox label="Timer" checked={timer} handleChange={setTimer} />
          <DKCheckbox
            label="Auto-refresh"
            checked={autoRefresh}
            handleChange={setAutoRefresh}
          />
          {autoRefresh && (
            <DKCheckbox
              label="Recycle wrong bananas"
              checked={recycleWrong}
              handleChange={setRecycleWrong}
            />
          )}
          <DKCheckbox
            label="I Hate Myself"
            checked={iHateMyself}
            handleChange={setIHateMyself}
          />
        </Box>
      </Grid>
      <Grid size={1} />
    </Grid>
  );
};
