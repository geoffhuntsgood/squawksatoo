import { Box, Card, Tab, Tabs, ThemeProvider, Typography } from "@mui/material";
import { useState } from "react";
import { GameOptions } from "./classes";
import { DK64Game, DKBGame, GameConfig } from "./components";
import { DKButton } from "./inputs";
import { theme } from "./utils/theme";
import type { GameType } from "./utils/types";

const App = () => {
  const [game, setGame] = useState<GameType>("DKB");
  const [gameOptions, setGameOptions] = useState<GameOptions | null>(null);

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

          <GameConfig
            currentGame={game}
            setOptions={setGameOptions}
            setGoLabel={setGoLabel}
          />

          <Box sx={{ textAlign: "center" }}>
            <DKButton label={goLabel} handleClick={() => setStart(true)} />
          </Box>
        </>
      )}
      {start && gameOptions && (
        <>
          {game === "DKB" && gameOptions.bananas.length > 0 && (
            <DKBGame
              options={gameOptions}
              setOptions={setGameOptions}
              setStart={setStart}
            />
          )}
          {game === "DK64" && gameOptions.items.length > 0 && (
            <DK64Game
              options={gameOptions}
              setOptions={setGameOptions}
              setStart={setStart}
            />
          )}
        </>
      )}
    </ThemeProvider>
  );
};

export default App;
