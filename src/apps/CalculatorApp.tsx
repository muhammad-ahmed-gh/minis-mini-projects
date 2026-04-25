import Calculator from "../components/calculator/Calculator";
import Container from "../components/UI/Container";
import { ErrorProvider } from "../providers/calculator/ErrorProvider";
import { InputProvider } from "../providers/calculator/InputProvider";

export default function CalculatorApp() {
  return (
    <InputProvider>
      <ErrorProvider>
        <section className="pt-header-h">
          <Container>
            <Calculator />
          </Container>
        </section>
      </ErrorProvider>
    </InputProvider>
  );
}
