import { Box, Grid } from "@mui/material";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { DKBOptions, type DKBBanana } from "../classes";
import { DKBCategory, LayerName } from "../enums";
import { DKCheckbox, DKMultiSelect, DKSelect } from "../inputs";
import { getAllForCategories, getLayerBananas } from "../layers/layerApi";

export const DKBConfig = ({
  setOptions,
  setGoLabel
}: {
  setOptions: Dispatch<SetStateAction<DKBOptions | null>>;
  setGoLabel: Dispatch<SetStateAction<string>>;
}) => {
  const [layer, setLayer] = useState<string>(LayerName.Lagoon);
  const [categories, setCategories] = useState<DKBCategory[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const [config, setConfig] = useState<DKBOptions>({
    count: "1",
    timer: false,
    autoRefresh: true,
    iHateMyself: false,
    includePostgame: false,
    recycleWrong: false,
    initialBananas: []
  });

  const getCount = () => {
    const range = [];
    const countToUse =
      config.initialBananas.length > 5 ? 5 : config.initialBananas.length;
    for (let i = 1; i <= countToUse; i++) {
      range.push(`${i}`);
    }
    return range;
  };

  useEffect(() => {
    const layerNans = getLayerBananas(
      layer as LayerName,
      config.includePostgame,
      config.iHateMyself
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
    const initialBananas = getAllForCategories(
      layer as LayerName,
      [],
      config.includePostgame,
      config.iHateMyself
    );
    setConfig({
      ...config,
      initialBananas
    });
  }, [layer, config.includePostgame, config.iHateMyself]);

  useEffect(() => {
    const updatedNans = getAllForCategories(
      layer as LayerName,
      selectedCategories as DKBCategory[],
      config.includePostgame,
      config.iHateMyself
    );
    setConfig({
      ...config,
      initialBananas: updatedNans
    });
  }, [layer, selectedCategories, config.includePostgame, config.iHateMyself]);

  useEffect(() => {
    if (config.initialBananas.length > 0) {
      setGoLabel(`Get ${config.count} out of ${config.initialBananas.length}`);
      setOptions(config);
    }
  }, [config, setGoLabel, setOptions]);

  return (
    <Grid container spacing={1}>
      <Grid size={2} />
      <Grid size={4}>
        <Box sx={{ margin: "10px" }}>
          <DKSelect
            label="Layer"
            value={layer}
            handleChange={setLayer}
            selectItems={Object.values(LayerName)}
          />
          <DKMultiSelect
            label="Categories"
            values={selectedCategories}
            handleChange={setSelectedCategories}
            selectItems={categories}
          />
          <DKSelect
            label="How many at a time?"
            value={config.count}
            handleChange={(val: any) => setConfig({ ...config, count: val })}
            selectItems={getCount()}
          />
        </Box>
      </Grid>
      <Grid size={5}>
        <Box sx={{ margin: "10px" }}>
          <DKCheckbox
            label="Include Postgame"
            checked={config.includePostgame}
            handleChange={(val: any) =>
              setConfig({ ...config, includePostgame: val })
            }
            helpText="Adds all bananas that only appear after defeating K. Rool."
          />
          <DKCheckbox
            label="Timer"
            checked={config.timer}
            handleChange={(val: any) => setConfig({ ...config, timer: val })}
          />
          <DKCheckbox
            label="Auto-refresh"
            checked={config.autoRefresh}
            handleChange={(val: any) =>
              setConfig({ ...config, autoRefresh: val })
            }
            helpText={`Continuously adds new goals until you run out (currently ${config.initialBananas.length}).`}
          />
          {config.autoRefresh && (
            <DKCheckbox
              label="Recycle wrong bananas"
              checked={config.recycleWrong}
              handleChange={(val: any) =>
                setConfig({ ...config, recycleWrong: val })
              }
              helpText="Adds a wrong-marked banana back to the pool so that the correct one can be obtained later."
            />
          )}
          <DKCheckbox
            label="I Hate Myself"
            checked={config.iHateMyself}
            handleChange={(val: any) =>
              setConfig({ ...config, iHateMyself: val })
            }
            helpText='Adds long goals like "A Complete Fossil Collection" to the pool.'
          />
        </Box>
      </Grid>
      <Grid size={1} />
    </Grid>
  );
};
