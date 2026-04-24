import Calculator from "../components/calculator/Calculator";
import Container from "../components/UI/Container";

export default function CalculatorApp() {
  return (
    <section className="pt-header-h">
      <Container>
        <Calculator />
      </Container>
    </section>
  );
}