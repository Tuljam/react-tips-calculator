import ReactDOM from "react-dom/client";
import { App } from "./App";
import { Container } from "./containerStyles";
import { Global } from "./GlobalStyles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);


root.render(
  <>
    <Global />
    <Container>
      <App />
    </Container>
  </>
);
