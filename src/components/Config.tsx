import { Grid } from "@mui/material";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
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
  setPlaying,
  count,
  setCount,
  timer,
  setTimer,
  continuous,
  setContinuous,
  recycle,
  setRecycle
}: {
  layerBananas: Banana[];
  setLayerBananas: Dispatch<SetStateAction<Banana[]>>;
  setPlaying: Dispatch<SetStateAction<boolean>>;
  count: string;
  setCount: Dispatch<SetStateAction<string>>;
  timer: boolean;
  setTimer: Dispatch<SetStateAction<boolean>>;
  continuous: boolean;
  setContinuous: Dispatch<SetStateAction<boolean>>;
  recycle: boolean;
  setRecycle: Dispatch<SetStateAction<boolean>>;
}) => {
  const [layer, setLayer] = useState(LayerName.Ingot as string);
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
      const nc = getNansAndCatsForLayer(layer as LayerName, includePostgame);
      setCategories(nc.categories);
      setSelectedCategories(nc.categories);
      const initialNans = getNansByCat(nc.bananas, nc.categories);
      setLayerBananas(initialNans);
    }
  }, [layer, includePostgame, setLayerBananas]);

  useEffect(() => {
    const nc = getNansAndCatsForLayer(layer as LayerName, includePostgame);
    setLayerBananas(getNansByCat(nc.bananas, selectedCategories));
  }, [selectedCategories, includePostgame, layer, setLayerBananas]);

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
      <DKCheckbox
        label="Recycle wrong bananas?"
        checked={recycle}
        handleChange={setRecycle}
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
