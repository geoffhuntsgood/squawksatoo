import { Box, Grid } from "@mui/material";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import type { DKBBanana, Options } from "../classes";
import { DKBCategory, LayerName } from "../enums";
import {
  getAllForCategories,
  getLayerBananas
} from "../layers/layerApi";
import { DKCheckbox, DKMultiSelect, DKSelect } from "../inputs";

export const DKBConfig = ({
  setOptions,
  setGoLabel
}: {
  setOptions: Dispatch<SetStateAction<Options | null>>;
  setGoLabel: Dispatch<SetStateAction<string>>;
}) => {
  const [layer, setLayer] = useState<string>(LayerName.Lagoon);
  const [categories, setCategories] = useState<DKBCategory[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [count, setCount] = useState("1");

  const [includePostgame, setIncludePostgame] = useState(false);
  const [timer, setTimer] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [recycleWrong, setRecycleWrong] = useState(false);
  const [iHateMyself, setIHateMyself] = useState(false);

  const [initialBananas, setInitialBananas] = useState<DKBBanana[]>([]);

  const getCount = () => {
    const range = [];
    const countToUse = initialBananas.length > 5 ? 5 : initialBananas.length;
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
    const initialNans = getAllForCategories(
      layer as LayerName,
      [],
      includePostgame,
      iHateMyself
    );
    setInitialBananas(initialNans);
  }, [layer, includePostgame, iHateMyself]);

  useEffect(() => {
    setInitialBananas(
      getAllForCategories(
        layer as LayerName,
        selectedCategories as DKBCategory[],
        includePostgame,
        iHateMyself
      )
    );
  }, [layer, selectedCategories, includePostgame, iHateMyself]);

  useEffect(() => {
    if (initialBananas.length > 0) {
      setGoLabel(`Get ${count} out of ${initialBananas.length}`);
      setOptions({
        initialBananas,
        count,
        includePostgame,
        timer,
        autoRefresh,
        recycleWrong,
        iHateMyself
      });
    }
  }, [
    initialBananas,
    count,
    includePostgame,
    timer,
    autoRefresh,
    recycleWrong,
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
            label="How many at a time?"
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
