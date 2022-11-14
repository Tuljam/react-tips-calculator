import { Form } from "./components/Form/Form";
import { ReactComponent as Icon } from "./assets/icon/shape.svg";
import { IconStyled } from "./components/Icon/styles";
import { AppWrapper } from "./appWtapperStyles";
import { useState } from "react";

export const App = () => {
  return (
    <AppWrapper>
      <IconStyled>
        <Icon />
      </IconStyled>
      <Form>
        <h1>Welcome to App</h1>
        <h6>Let’s go calculate your tip</h6>
      </Form>
    </AppWrapper>
  );
};
