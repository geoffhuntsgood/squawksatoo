import { ThemeProvider } from "@mui/material";
import { useState } from "react";
import type { Banana } from "./classes/Banana";
import { Config } from "./components/game/Config";
import { Game } from "./components/game/Game";
import { theme } from "./utils/theme";

const App = () => {
  const [count, setCount] = useState("1");
  const [layerBananas, setLayerBananas] = useState<Banana[]>([]);
  const [playing, setPlaying] = useState(false);
  const [timer, setTimer] = useState(false);
  const [continuous, setContinuous] = useState(true);
  const [recycle, setRecycle] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      {!playing && (
        <Config
          layerBananas={layerBananas}
          setLayerBananas={setLayerBananas}
          setPlaying={setPlaying}
          count={count}
          setCount={setCount}
          timer={timer}
          setTimer={setTimer}
          continuous={continuous}
          setContinuous={setContinuous}
          recycle={recycle}
          setRecycle={setRecycle}
        />
      )}
      {playing && (
        <Game
          layerBananas={layerBananas}
          setPlaying={setPlaying}
          count={count}
          setCount={setCount}
          timer={timer}
          continuous={continuous}
          recycle={recycle}
        />
      )}
    </ThemeProvider>
  );
};

export default App;
