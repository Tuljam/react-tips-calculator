import { Form } from "./components/Form/Form";
import { AppWrapper } from "./appWtapperStyles";

export const App = () => {
  return (
    <AppWrapper>
        <Form>
        <h1 className="form__title">Welcome to App</h1>
        <h5 className="form__subtitle">Let’s go calculate your tip</h5>
      </Form>
    </AppWrapper>
  );
};
