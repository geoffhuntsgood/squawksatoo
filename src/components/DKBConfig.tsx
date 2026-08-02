import { Box, Grid } from "@mui/material";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { DKBBanana, DKBOptions } from "../classes";
import { DKBCategory, LayerName } from "../enums";
import { DKCheckbox, DKMultiSelect, DKSelect } from "../inputs";
import {
  getBananasForCategories,
  getCategoriesForLayer
} from "../utils/layerApi";

export const DKBConfig = ({
  setOptions,
  setGoLabel
}: {
  setOptions: Dispatch<SetStateAction<DKBOptions | null>>;
  setGoLabel: Dispatch<SetStateAction<string>>;
}) => {
  const [config, setConfig] = useState({
    count: "1",
    timer: false,
    autoRefresh: true,
    recycle: false
  });

  const [layer, setLayer] = useState<string>(LayerName.Lagoon);
  const [cats, setCats] = useState<DKBCategory[]>([]);
  const [selectedCats, setSelectedCats] = useState<string[]>([]);
  const [includePostgame, setIncludePostgame] = useState(false);
  const [hellMode, setHellMode] = useState(false);

  const [bananas, setBananas] = useState<DKBBanana[]>(
    getBananasForCategories(layer as LayerName, [], includePostgame, hellMode)
  );

  const getCount = () => {
    const range = [];
    const countToUse = bananas.length > 5 ? 5 : bananas.length;
    for (let i = 1; i <= countToUse; i++) {
      range.push(`${i}`);
    }
    return range;
  };

  useEffect(() => {
    setCats(getCategoriesForLayer(layer as LayerName));
    setBananas(
      getBananasForCategories(
        layer as LayerName,
        selectedCats as DKBCategory[],
        includePostgame,
        hellMode
      )
    );
  }, [layer, selectedCats, includePostgame, hellMode]);

  useEffect(() => {
    if (bananas.length > 0) {
      setGoLabel(`Get ${config.count}/${bananas.length}`);
      setOptions({
        ...config,
        bananas
      });
    }
  }, [bananas, config, setGoLabel, setOptions]);

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
            values={selectedCats}
            handleChange={setSelectedCats}
            selectItems={cats}
          />
          <DKSelect
            label="How many at a time?"
            value={config.count}
            handleChange={(val) =>
              setConfig({ ...config, count: val as string })
            }
            selectItems={getCount()}
          />
        </Box>
      </Grid>
      <Grid size={5}>
        <Box sx={{ margin: "10px" }}>
          <DKCheckbox
            label="Timer"
            checked={config.timer}
            handleChange={(val) =>
              setConfig({ ...config, timer: val as boolean })
            }
          />
          <DKCheckbox
            label="Auto-refresh"
            checked={config.autoRefresh}
            handleChange={(val) =>
              setConfig({ ...config, autoRefresh: val as boolean })
            }
            helpText={`Continuously adds new goals until you run out (currently ${bananas.length}).`}
          />
          {config.autoRefresh && (
            <DKCheckbox
              label="Recycle wrong bananas"
              checked={config.recycle}
              handleChange={(val) =>
                setConfig({ ...config, recycle: val as boolean })
              }
              helpText="Adds a wrong-marked banana back to the pool so that the correct one can be obtained later."
            />
          )}
          <DKCheckbox
            label="Include Postgame"
            checked={includePostgame}
            handleChange={setIncludePostgame}
            helpText="Adds all bananas that only appear after defeating K. Rool."
          />
          <DKCheckbox
            label="Hell Mode"
            checked={hellMode}
            handleChange={setHellMode}
            helpText='Adds long goals like "A Complete Fossil Collection" to the pool.'
          />
        </Box>
      </Grid>
      <Grid size={1} />
    </Grid>
  );
};
