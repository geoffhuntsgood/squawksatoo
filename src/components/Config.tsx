import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import type { Banana } from "../classes/Banana";
import { Category, LayerName } from "../enums";
import { getNansAndCatsForLayer, getNansByCat } from "../utils/api";
import { DKButton } from "./DKButton";
import { DKCheckbox } from "./DKCheckbox";
import { DKHeader } from "./DKHeader";
import { DKMutliSelect } from "./DKMultiSelect";
import { DKSelect } from "./DKSelect";

export const Config = ({
  layerBananas,
  setLayerBananas,
  setBackground,
  setPlaying,
  count,
  setCount,
  timer,
  setTimer,
  continuous,
  setContinuous
}: {
  layerBananas: Banana[];
  setLayerBananas: Function;
  setBackground: Function;
  setPlaying: Function;
  count: string;
  setCount: Function;
  timer: boolean;
  setTimer: Function;
  continuous: boolean;
  setContinuous: Function;
}) => {
  const [layer, setLayer] = useState(LayerName.Ingot);
  const [includePostgame, setIncludePostgame] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);

  const getCount = () => {
    const range = [];
    const countToUse = layerBananas.length > 5 ? 5 : layerBananas.length;
    for (let i = 1; i <= countToUse; i++) {
      range.push(`${i}`);
    }
    return range;
  };

  useEffect(() => {
    if (layer) {
      const nc = getNansAndCatsForLayer(layer, includePostgame);
      setCategories(nc.categories);
      setSelectedCategories(nc.categories);
      setBackground(nc.image);
      const initialNans = getNansByCat(nc.bananas, nc.categories);
      setLayerBananas(initialNans);
    }
  }, [layer, includePostgame]);

  useEffect(() => {
    const nc = getNansAndCatsForLayer(layer, includePostgame);
    setLayerBananas(getNansByCat(nc.bananas, selectedCategories));
  }, [selectedCategories]);

  return (
    <Grid container spacing={1}>
      <Grid size={12}>
        <DKHeader />
      </Grid>
      <DKSelect
        label="Layer"
        value={layer}
        handleChange={setLayer}
        selectItems={Object.values(LayerName)}
      />
      <Grid size={12}>
        <DKCheckbox
          label="Include Postgame?"
          checked={includePostgame}
          handleChange={setIncludePostgame}
        />
      </Grid>
      <DKMutliSelect
        label="Categories"
        values={selectedCategories}
        handleChange={setSelectedCategories}
        selectItems={categories}
      />
      <DKSelect
        label="How many?"
        value={count}
        handleChange={setCount}
        selectItems={getCount()}
      />
      <DKCheckbox label="Timer?" checked={timer} handleChange={setTimer} />
      <DKCheckbox
        label="Auto-refresh?"
        checked={continuous}
        handleChange={setContinuous}
      />
      {layerBananas.length > 0 && (
        <DKButton
          label={`Get ${count} out of ${layerBananas.length}`}
          handleClick={() => setPlaying(true)}
        />
      )}
    </Grid>
  );
};
