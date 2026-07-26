import { Box, Grid } from "@mui/material";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { DK64Options, type DK64Item } from "../classes";
import { DK64Category, LevelName } from "../enums";
import { DKCheckbox, DKMultiSelect, DKSelect } from "../inputs";
import {
  getCategoriesForLevel,
  getItemsForCategories
} from "../levels/levelApi";

export const DK64Config = ({
  setOptions,
  setGoLabel
}: {
  setOptions: Dispatch<SetStateAction<DK64Options | null>>;
  setGoLabel: Dispatch<SetStateAction<string>>;
}) => {
  const [config, setConfig] = useState({
    count: "1",
    timer: false,
    autoRefresh: false
  });

  const [cbSanity, setCBSanity] = useState({
    balloons: false,
    bunches: false,
    singles: false
  });

  const [level, setLevel] = useState<string>(LevelName.All);
  const [cats, setCats] = useState<DK64Category[]>([]);
  const [selectedCats, setSelectedCats] = useState<string[]>([]);
  const [hellMode, setHellMode] = useState(false);
  const [enableCBSanity, setEnableCBSanity] = useState(false);

  const [items, setItems] = useState<DK64Item[]>(
    getItemsForCategories(level as LevelName, [], hellMode, cbSanity)
  );

  const getCount = () => {
    const range = [];
    const countToUse = items.length > 5 ? 5 : items.length;
    for (let i = 1; i <= countToUse; i++) {
      range.push(`${i}`);
    }
    return range;
  };

  useEffect(() => {
    setCats(getCategoriesForLevel(level as LevelName, cbSanity));
    setItems(
      getItemsForCategories(
        level as LevelName,
        selectedCats as DK64Category[],
        hellMode,
        cbSanity
      )
    );
  }, [level, selectedCats, hellMode, cbSanity]);

  useEffect(() => {
    if (items.length > 0) {
      setGoLabel(`Get ${config.count} out of ${items.length}`);
      setOptions({
        ...config,
        items
      });
    }
  }, [items, config, setGoLabel, setOptions]);

  return (
    <Grid container spacing={1}>
      <Grid size={2} />
      <Grid size={4}>
        <Box sx={{ margin: "10px" }}>
          <DKSelect
            label="Level"
            value={level}
            handleChange={setLevel}
            selectItems={Object.values(LevelName)}
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
            helpText={`Continuously adds new goals until you run out (currently ${items.length}).`}
          />
          <DKCheckbox
            label="Hell Mode"
            checked={hellMode}
            handleChange={setHellMode}
            helpText="Adds long goals like Company Coins to the pool."
          />
          {level !== LevelName.Helm && level !== LevelName.Isles && (
            <DKCheckbox
              label="Enable CBSanity"
              checked={enableCBSanity}
              handleChange={setEnableCBSanity}
              helpText="Allows for balloon, bunch, and single colored banana goals. Removes Medals from the pool."
            />
          )}
          {enableCBSanity && (
            <>
              <DKCheckbox
                secondary
                label="Balloons"
                checked={cbSanity.balloons}
                handleChange={(val) =>
                  setCBSanity({
                    ...cbSanity,
                    balloons: val as boolean
                  })
                }
              />
              <DKCheckbox
                secondary
                label="Bunches"
                checked={cbSanity.bunches}
                handleChange={(val) =>
                  setCBSanity({
                    ...cbSanity,
                    bunches: val as boolean
                  })
                }
              />
              <DKCheckbox
                secondary
                label="Singles"
                checked={cbSanity.singles}
                handleChange={(val) =>
                  setCBSanity({
                    ...cbSanity,
                    singles: val as boolean
                  })
                }
              />
            </>
          )}
        </Box>
      </Grid>
      <Grid size={1} />
    </Grid>
  );
};
