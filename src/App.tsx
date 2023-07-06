import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalSyle } from "./styles/global";
import { Transactions } from "./pages/Trasactions";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalSyle />
      
      <Transactions />
    </ThemeProvider>
  );
}
