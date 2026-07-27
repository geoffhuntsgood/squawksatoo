import { Box, Card, Tab, Tabs, ThemeProvider, Typography } from "@mui/material";
import { useState } from "react";
import { DK64Options, DKBOptions } from "./classes";
import { DK64Config, DK64Game, DKBConfig, DKBGame } from "./components";
import { DKButton } from "./inputs";
import { theme } from "./utils/theme";
import type { GameType } from "./utils/types";

const App = () => {
  const [game, setGame] = useState<GameType>("DKB");
  const [dkbOptions, setDKBOptions] = useState<DKBOptions | null>(null);
  const [dk64Options, setDK64Options] = useState<DK64Options | null>(null);

  const [goLabel, setGoLabel] = useState("");
  const [start, setStart] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Card>
        <img src="./img/squawks.png" height={50} width={50} />
        <Typography color="textPrimary" variant="h1">
          Squawksatoo
        </Typography>
        <img
          src="./img/squawks.png"
          height={50}
          width={50}
          style={{ transform: "scaleX(-1)" }}
        />
      </Card>

      {!start && (
        <>
          <Tabs
            centered
            value={game}
            onChange={(_, newValue) => setGame(newValue)}
          >
            <Tab label="DK BANANZA" value="DKB" />
            <Tab label="DK64" value="DK64" />
          </Tabs>

          {game === "DKB" && (
            <DKBConfig setOptions={setDKBOptions} setGoLabel={setGoLabel} />
          )}
          {game === "DK64" && (
            <DK64Config setOptions={setDK64Options} setGoLabel={setGoLabel} />
          )}

          <Box sx={{ textAlign: "center" }}>
            <DKButton label={goLabel} handleClick={() => setStart(true)} />
          </Box>
        </>
      )}
      {start && (
        <>
          {game === "DKB" && dkbOptions && (
            <DKBGame
              options={dkbOptions}
              setOptions={setDKBOptions}
              setStart={setStart}
            />
          )}
          {game === "DK64" && dk64Options && (
            <DK64Game
              options={dk64Options}
              setOptions={setDK64Options}
              setStart={setStart}
            />
          )}
        </>
      )}
    </ThemeProvider>
  );
};

export default App;
