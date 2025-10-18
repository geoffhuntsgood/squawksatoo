import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  MenuItem
} from "@mui/material";
import { useEffect, useState } from "react";
import { useReward } from "react-rewards";
import type { Banana } from "./classes/Banana";
import { DKCheckbox, DKTypography } from "./components";
import { DKButton } from "./components/DKButton";
import { DKSelect } from "./components/DKSelect";
import { Category, LayerName } from "./enums";
import { getNansAndCatsForLayer, getNansByCat } from "./utils/api";
import { dkColors } from "./utils/colors";

interface ChecklistBanana extends Banana {
  isCompleted: boolean;
}

const App = () => {
  const [layer, setLayer] = useState("" as LayerName);
  const [includePostgame, setIncludePostgame] = useState(false);
  const [count, setCount] = useState("1");
  const [open, setOpen] = useState(false);
  const [keepItComing, setKeepItComing] = useState(false);
  const [background, setBackground] = useState("");

  const [initialLayerBananas, setInitialLayerBananas] = useState<Banana[]>([]);
  const [layerBananas, setLayerBananas] = useState<Banana[]>([]);
  const [selectedBananas, setSelectedBananas] = useState<ChecklistBanana[]>([]);

  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);

  const { reward } = useReward("finished", "emoji", {
    lifetime: 5000,
    spread: 180,
    elementCount: 50,
    zIndex: 9999,
    emoji: ["🍌"]
  });

  const selectBananas = (num: number, init?: boolean) => {
    if (selectedBananas.length > 0) {
      setSelectedBananas([]);
    }
    const selected: ChecklistBanana[] = [];
    const nans = init ? [...initialLayerBananas] : [...layerBananas];
    for (let i = 0; i < num; i++) {
      const index = Math.floor(Math.random() * nans.length);
      selected.push({
        ...nans[index],
        isCompleted: false
      });
      nans.splice(index, 1);
    }
    setSelectedBananas(selected);
    setLayerBananas(nans);
  };

  const handleSelectedCategories = (cat: Category) => {
    const sel = [...selectedCategories];
    if (sel.includes(cat)) {
      sel.splice(sel.indexOf(cat), 1);
    } else {
      sel.push(cat);
    }
    setSelectedCategories(sel);
  };

  const getNewBananas = () => {
    setLayerBananas(initialLayerBananas);
    selectBananas(Number(count), true);
  };

  const handleCompletedBanana = (name: string) => {
    const nan = selectedBananas.find((b: Banana) => b.name === name);
    if (nan) {
      if (keepItComing) {
        nan.isCompleted = true;
        const updatedLayerNans = [...layerBananas];
        const updatedSelectedNans = [...selectedBananas];
        setSelectedBananas(updatedSelectedNans);

        setTimeout(() => {
          if (updatedLayerNans.length > 0) {
            const index = Math.floor(Math.random() * updatedLayerNans.length);
            updatedSelectedNans.splice(updatedSelectedNans.indexOf(nan), 1, {
              ...updatedLayerNans[index],
              isCompleted: false
            });
            updatedLayerNans.splice(index, 1);
          }

          setSelectedBananas(updatedSelectedNans);
          setLayerBananas(updatedLayerNans);
        }, 500);
      } else {
        nan.isCompleted = !nan.isCompleted;
        const updatedSelectedNans = [...selectedBananas];
        setSelectedBananas(updatedSelectedNans);
      }
    }
  };

  const handleClose = () => {
    setLayerBananas(initialLayerBananas);
    setCount("1");
    setSelectedCategories(categories);
    setOpen(false);
  };

  useEffect(() => {
    if (layer) {
      const nc = getNansAndCatsForLayer(layer, includePostgame);
      setCategories(nc.categories);
      setSelectedCategories(nc.categories);
      setBackground(nc.image);
      const initialNans = getNansByCat(nc.bananas, nc.categories);
      setLayerBananas(initialNans);
      setInitialLayerBananas(initialNans);
    }
  }, [layer, includePostgame]);

  useEffect(() => {
    setLayerBananas(getNansByCat(layerBananas, selectedCategories));
  }, [selectedCategories]);

  useEffect(() => {
    if (
      selectedBananas.length > 0 &&
      selectedBananas.every((b: ChecklistBanana) => b.isCompleted)
    ) {
      reward();
    }
  }, [selectedBananas]);

  const styles = {
    mainGrid: {
      width: "100vw"
    },
    subGrid: {
      width: "100%"
    },
    box: {
      margin: "0 0 2rem 0",
      overflowY: "auto",
      height: "15rem",
      border: `1px solid ${dkColors.outlineColor}`,
      borderRadius: "3px"
    },
    menuItem: {
      fontFamily: "LuckiestGuy",
      textTransform: "uppercase"
    },
    listContainer: {
      background: "rgba(0, 0, 0, 0.5)",
      borderRadius: "3px",
      height: "75%",
      overflowY: "auto"
    },
    dialog: {
      height: "25rem",
      width: "30rem",
      color: dkColors.textColor,
      background: `url("${background}") no-repeat top center`,
      backgroundSize: "150% 100%",
      backgroundColor: dkColors.backgroundColor
    },
    dialogActions: {
      backgroundColor: dkColors.backgroundColor
    }
  };

  return (
    <>
      <Grid container spacing={1}>
        <DKTypography header img text="Squawksatoo" />
        <Grid size={3}></Grid>
        <DKSelect
          label="Layer"
          value={layer}
          handleChange={setLayer}
          selectItems={Object.values(LayerName).map((l: string) => {
            return (
              <MenuItem value={l} sx={styles.menuItem}>
                {l}
              </MenuItem>
            );
          })}
        />
        <span id="finished" />
        <DKCheckbox
          label="INCLUDE POSTGAME"
          checked={includePostgame}
          handleChange={setIncludePostgame}
        />
        {layer && (
          <>
            <DKTypography text="INCLUDE THESE?" />
            <Grid size={3}></Grid>
            <Grid size={6}>
              <Box sx={styles.box}>
                {categories.map((c: Category) => {
                  return (
                    <DKCheckbox
                      key={c}
                      label={c}
                      checked={selectedCategories.includes(c)}
                      handleChange={handleSelectedCategories}
                      isArray={true}
                    />
                  );
                })}
              </Box>
            </Grid>
            <Grid size={3}></Grid>
            <Grid size={3}></Grid>
            <DKSelect
              label="Count"
              value={count}
              handleChange={setCount}
              selectItems={[
                <MenuItem value="1" sx={styles.menuItem}>
                  1
                </MenuItem>,
                <MenuItem value="2" sx={styles.menuItem}>
                  2
                </MenuItem>,
                <MenuItem value="3" sx={styles.menuItem}>
                  3
                </MenuItem>,
                <MenuItem value="4" sx={styles.menuItem}>
                  4
                </MenuItem>,
                <MenuItem value="5" sx={styles.menuItem}>
                  5
                </MenuItem>
              ]}
            />
            <DKButton
              label={`GET ${count} OF ${layerBananas.length}`}
              handleClick={() => {
                selectBananas(Number(count));
                setOpen(true);
              }}
            />
          </>
        )}
      </Grid>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent sx={styles.dialog}>
          <DKTypography
            header
            text={
              selectedBananas.every((b: ChecklistBanana) => b.isCompleted)
                ? "Nice"
                : (layerBananas.length === 0 && keepItComing) || !keepItComing
                ? `${
                    selectedBananas.filter(
                      (b: ChecklistBanana) => !b.isCompleted
                    ).length
                  } left`
                : "Go get 'em!"
            }
          />
          <Box sx={styles.listContainer}>
            {selectedBananas.map((b: ChecklistBanana) => (
              <DKCheckbox
                key={b.num}
                label={b.name}
                checked={b.isCompleted}
                handleChange={handleCompletedBanana}
                isArray={true}
                animate={true}
              />
            ))}
          </Box>
        </DialogContent>
        <DialogActions sx={styles.dialogActions}>
          <Grid container spacing={1} sx={styles.subGrid}>
            <DKCheckbox
              label="Keep it coming!"
              checked={keepItComing}
              handleChange={setKeepItComing}
              size={6}
              disabled={layerBananas.length === 0}
            />
            <Grid size={1}></Grid>
            <DKButton label="REFRESH" handleClick={getNewBananas} size={4} />
          </Grid>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default App;
