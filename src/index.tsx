import ReactDOM from "react-dom/client";
import { App } from "./App";
import { Container } from "./containerStyles";
import { GlobalStyles } from "./GlobalStyles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <>
    <GlobalStyles />
    {/* <Container> */}
      <App />
    {/* </Container> */}
  </>
);
