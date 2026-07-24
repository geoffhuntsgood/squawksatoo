import { Box, Grid } from "@mui/material";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { DK64Options, type DK64Item } from "../classes";
import { DK64Category, LevelName } from "../enums";
import { DKCheckbox, DKMultiSelect, DKSelect } from "../inputs";
import { getAllForCategories } from "../levels/levelApi";

export const DK64Config = ({
  setOptions,
  setGoLabel
}: {
  setOptions: Dispatch<SetStateAction<DK64Options | null>>;
  setGoLabel: Dispatch<SetStateAction<string>>;
}) => {
  const [level, setLevel] = useState<string>(LevelName.All);
  const [categories, setCategories] = useState<DK64Category[]>([]);
  const [selectedCats, setSelectedCats] = useState<string[]>([]);

  const [config, setConfig] = useState<DK64Options>({
    count: "1",
    timer: false,
    autoRefresh: false,
    iHateMyself: false,
    enableCBSanity: false,
    cbSanitySettings: {
      balloons: false,
      bunches: false,
      singles: false
    },
    initialItems: []
  });

  const getCount = () => {
    const range = [];
    if (config.initialItems) {
      const countToUse =
        config.initialItems.length > 5 ? 5 : config.initialItems.length;
      for (let i = 1; i <= countToUse; i++) {
        range.push(`${i}`);
      }
    }
    return range;
  };

  useEffect(() => {
    const levelItems = getAllForCategories(
      [],
      level as LevelName,
      config.iHateMyself,
      config.cbSanitySettings
    );
    const cats: DK64Category[] = [];
    levelItems.forEach((item: DK64Item) => {
      if (!cats.includes(item.category as DK64Category)) {
        cats.push(item.category as DK64Category);
      }
    });
    setCategories(cats);
    setConfig({
      ...config,
      initialItems: levelItems
    });
  }, [level, config.iHateMyself, config.cbSanitySettings]);

  useEffect(() => {
    const updatedItems = getAllForCategories(
      selectedCats as DK64Category[],
      level as LevelName,
      config.iHateMyself,
      config.cbSanitySettings
    );
    setConfig({
      ...config,
      initialItems: updatedItems
    });
  }, [selectedCats, level, config.iHateMyself, config.cbSanitySettings]);

  useEffect(() => {
    if (config.initialItems.length > 0) {
      setGoLabel(`Get ${config.count} out of ${config.initialItems.length}`);
      setOptions(config);
    }
  }, [config, setGoLabel, setOptions]);

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
            helpText={`Continuously adds new goals until you run out (currently ${config.initialItems.length}).`}
          />
          <DKCheckbox
            label="I Hate Myself"
            checked={config.iHateMyself}
            handleChange={(val: any) =>
              setConfig({ ...config, iHateMyself: val })
            }
            helpText="Adds long goals like Company Coins to the pool."
          />
          {level !== LevelName.Helm && level !== LevelName.Isles && (
            <DKCheckbox
              label="Enable CBSanity"
              checked={config.enableCBSanity}
              handleChange={(val: any) =>
                setConfig({ ...config, enableCBSanity: val })
              }
              helpText="Allows for balloon, bunch, and single colored banana goals. Removes Medals from the pool."
            />
          )}
          {config.enableCBSanity && (
            <>
              <DKCheckbox
                secondary
                label="Balloons"
                checked={config.cbSanitySettings.balloons}
                handleChange={(val: any) =>
                  setConfig({
                    ...config,
                    cbSanitySettings: {
                      ...config.cbSanitySettings,
                      balloons: val
                    }
                  })
                }
              />
              <DKCheckbox
                secondary
                label="Bunches"
                checked={config.cbSanitySettings.bunches}
                handleChange={(val: any) =>
                  setConfig({
                    ...config,
                    cbSanitySettings: {
                      ...config.cbSanitySettings,
                      bunches: val
                    }
                  })
                }
              />
              <DKCheckbox
                secondary
                label="Singles"
                checked={config.cbSanitySettings.singles}
                handleChange={(val: any) =>
                  setConfig({
                    ...config,
                    cbSanitySettings: {
                      ...config.cbSanitySettings,
                      singles: val
                    }
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
