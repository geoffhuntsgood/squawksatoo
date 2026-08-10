import { Box, Grid } from "@mui/material";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { DK64Item, DKBBanana, GameOptions } from "../classes";
import { DK64Category, DKBCategory, LayerName, LevelName } from "../enums";
import { DKCheckbox, DKMultiSelect, DKSelect, DKTextBox } from "../inputs";
import {
  getBananasForCategories,
  getCategoriesForLayer
} from "../utils/layerApi";
import {
  getCategoriesForLevel,
  getItemsForCategories
} from "../utils/levelApi";
import type { GameType } from "../utils/types";

export const GameConfig = ({
  currentGame,
  setOptions,
  setGoLabel
}: {
  currentGame: GameType;
  setOptions: Dispatch<SetStateAction<GameOptions | null>>;
  setGoLabel: Dispatch<SetStateAction<string>>;
}) => {
  const [config, setConfig] = useState({
    count: "1",
    seed: "",
    timer: true,
    autoRefresh: false,
    recycle: false,
    useKongColors: false
  });

  const [layer, setLayer] = useState<string>(LayerName.Lagoon);
  const [dkbCats, setDKBCats] = useState<DKBCategory[]>([]);
  const [selectedDKBCats, setSelectedDKBCats] = useState<string[]>([]);

  const [level, setLevel] = useState<string>(LevelName.All);
  const [dk64Cats, setDK64Cats] = useState<DK64Category[]>([]);
  const [selectedDK64Cats, setSelectedDK64Cats] = useState<string[]>([]);

  const [includePostgame, setIncludePostgame] = useState(false);
  const [hellMode, setHellMode] = useState(false);

  const [bananas, setBananas] = useState<DKBBanana[]>(
    getBananasForCategories(layer as LayerName, [], includePostgame, hellMode)
  );
  const [items, setItems] = useState<DK64Item[]>(
    getItemsForCategories(level as LevelName, [], hellMode)
  );

  const getCount = () => {
    const range = [];
    const totalLength = currentGame === "DKB" ? bananas.length : items.length;
    const maxAtOnce = totalLength > 5 ? 5 : totalLength;
    for (let i = 1; i <= maxAtOnce; i++) {
      range.push(`${i}`);
    }
    return range;
  };

  useEffect(() => {
    const bananas = getBananasForCategories(
      layer as LayerName,
      selectedDKBCats as DKBCategory[],
      includePostgame,
      hellMode
    );

    if (bananas.length < Number(config.count)) {
      setConfig((prev) => ({
        ...prev,
        count: String(bananas.length)
      }));
    }

    setDKBCats(getCategoriesForLayer(layer as LayerName));
    setBananas(bananas);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [layer, selectedDKBCats, includePostgame, hellMode]);

  useEffect(() => {
    const items = getItemsForCategories(
      level as LevelName,
      selectedDK64Cats as DK64Category[],
      hellMode
    );

    if (items.length < Number(config.count)) {
      setConfig((prev) => ({
        ...prev,
        count: String(items.length)
      }));
    }

    setDK64Cats(getCategoriesForLevel(level as LevelName));
    setItems(items);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level, selectedDK64Cats, hellMode]);

  useEffect(() => {
    if (currentGame === "DKB" && bananas.length > 0) {
      setGoLabel(`Get ${config.count}/${bananas.length}`);
      setOptions({
        ...config,
        bananas,
        items: []
      });
    }
    if (currentGame === "DK64" && items.length > 0) {
      setGoLabel(`Get ${config.count}/${items.length}`);
      setOptions({
        ...config,
        items,
        bananas: []
      });
    }
  }, [currentGame, bananas, items, config, setGoLabel, setOptions]);

  return (
    <Grid container spacing={1}>
      <Grid size={2} />

      <Grid size={4}>
        <Box sx={{ margin: "10px" }}>
          {currentGame === "DKB" && (
            <DKSelect
              label="Layer"
              value={layer}
              handleChange={setLayer}
              selectItems={Object.values(LayerName)}
            />
          )}

          {currentGame === "DK64" && (
            <DKSelect
              label="Level"
              value={level}
              handleChange={setLevel}
              selectItems={Object.values(LevelName)}
            />
          )}

          {currentGame === "DKB" && (
            <DKMultiSelect
              label="Categories"
              values={selectedDKBCats}
              handleChange={setSelectedDKBCats}
              selectItems={dkbCats}
            />
          )}

          {currentGame === "DK64" && (
            <DKMultiSelect
              label="Categories"
              values={selectedDK64Cats}
              handleChange={setSelectedDK64Cats}
              selectItems={dk64Cats}
            />
          )}

          <DKSelect
            label="How many at once?"
            value={config.count}
            handleChange={(val) =>
              setConfig({ ...config, count: val as string })
            }
            selectItems={getCount()}
          />

          <DKTextBox
            label="Seed"
            value={config.seed}
            handleChange={(val) =>
              setConfig({ ...config, seed: val as string })
            }
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
            helpText={`Continuously adds new goals until you run out (currently ${currentGame === "DKB" ? bananas.length : items.length}).`}
          />

          {currentGame === "DKB" && config.autoRefresh && (
            <DKCheckbox
              label="Recycle wrong bananas"
              checked={config.recycle}
              handleChange={(val) =>
                setConfig({ ...config, recycle: val as boolean })
              }
              helpText="Adds a wrong-marked banana back to the pool so that the correct one can be obtained later."
            />
          )}

          {currentGame === "DK64" && (
            <DKCheckbox
              label="Use Kong colors"
              checked={config.useKongColors}
              handleChange={(val) =>
                setConfig({ ...config, useKongColors: val as boolean })
              }
              helpText="Shows Kong colors instead of their names."
            />
          )}

          {currentGame === "DKB" && (
            <DKCheckbox
              label="Include Postgame"
              checked={includePostgame}
              handleChange={setIncludePostgame}
              helpText="Adds all bananas that only appear after defeating K. Rool."
            />
          )}

          <DKCheckbox
            label="Hell Mode"
            checked={hellMode}
            handleChange={setHellMode}
            helpText={`Adds long goals like ${currentGame === "DK64" ? "Company Coins" : '"A Complete Fossil Collection"'} to the pool.`}
          />
        </Box>
      </Grid>

      <Grid size={1} />
    </Grid>
  );
};
