import { Box, Card, Tab, Tabs, ThemeProvider, Typography } from "@mui/material";
import { useState } from "react";
import { Options } from "./classes/Options";
import { DK64Config } from "./components/DK64Config";
import { DK64Game } from "./components/DK64Game";
import { DKBConfig } from "./components/DKBConfig";
import { DKBGame } from "./components/DKBGame";
import { DKButton } from "./components/DKButton";
import { theme } from "./utils/theme";

const App = () => {
  const [game, setGame] = useState<"DKB" | "DK64">("DKB");
  const [options, setOptions] = useState<Options | null>(null);

  const [goLabel, setGoLabel] = useState<string>("");
  const [start, setStart] = useState<boolean>(false);

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
            <Tab label="DKB" value="DKB" />
            <Tab label="DK64" value="DK64" />
          </Tabs>

          {game === "DKB" && (
            <DKBConfig setOptions={setOptions} setGoLabel={setGoLabel} />
          )}
          {game === "DK64" && (
            <DK64Config setOptions={setOptions} setGoLabel={setGoLabel} />
          )}

          <Box sx={{ textAlign: "center" }}>
            <DKButton label={goLabel} handleClick={() => setStart(true)} />
          </Box>
        </>
      )}
      {start && options && (
        <>
          {game === "DKB" && (
            <DKBGame
              options={options}
              setOptions={setOptions}
              setStart={setStart}
            />
          )}
          {game === "DK64" && (
            <DK64Game
              options={options}
              setOptions={setOptions}
              setStart={setStart}
            />
          )}
        </>
      )}
    </ThemeProvider>
  );
};

export default App;
