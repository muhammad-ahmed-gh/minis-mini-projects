import { cardsData } from "../../config/homeConfigs";
import Card from "../UI/Card";
import Container from "../UI/Container";

export default function Apps() {
  return (
    <section id="apps">
      <Container className="py-section-p min-h-screen">
        <h2 className="uppercase text-primary-dark text-center text-[17px]">
          apps
        </h2>
        <p className="text-[30px] text-center font-[500] mt-[10px]">
          Discover our Useful Utilities
        </p>
        <p className="mt-[10px] mx-auto max-w-[min(550px,100%)] text-slate-500 text-center">
          Explore a collection of apps including currency converter, clock,
          quiz, and more
        </p>
        <div className="mt-[48px] flex flex-wrap justify-center gap-[30px] ">
          {cardsData.map((appData) => (
            <Card
              key={appData.id}
              title={appData.title}
              description={appData.description}
              appPath={appData.appPath}
              icon={appData.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
