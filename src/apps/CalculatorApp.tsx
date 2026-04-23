import Calculator from "../components/calculator/Calculator";
import Container from "../components/UI/Container";

export default function CalculatorApp() {
  return (
    <section className="mt-[calc(var(--spacing-header-h)+var(--spacing-section-p))]">
      <Container>
        <Calculator />
      </Container>
    </section>
  );
}