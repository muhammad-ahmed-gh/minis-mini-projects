import { useEffect, useRef } from "react";
import Container from "./UI/Container";
import { sleep } from "../utils/mainUtils";

const words = [
  "Prayer Times",
  "Currency Converter",
  "Notes",
  "Clock",
  "To-do List",
  "Weather",
  "Quiz",
  "Calculator",
];

export default function Landing() {
  const wordElement = useRef<HTMLParagraphElement>(null);
  const wordIndex = useRef(0);

  useEffect(() => {
    let canceled = false;
    wordIndex.current = Math.floor(Math.random() * words.length);

    const animate = async () => {
      if (!wordElement.current) return;

      const word = words[wordIndex.current];

      // typing
      for (let i = 0; i < word.length; ++i) {
        wordElement.current.textContent = word.slice(0, i + 1);
        await sleep(100);
        // unmount can happen in sleep periods
        if (canceled || !wordElement.current) return;
      }

      await sleep(1000);
      // unmount can happen in sleep periods
      if (canceled || !wordElement.current) return;

      // deleting
      for (let i = 0; i < word.length; ++i) {
        wordElement.current.textContent = word.slice(0, word.length - i - 1);
        await sleep(100);
        // unmount can happen in sleep periods
        if (canceled || !wordElement.current) return;
      }

      wordIndex.current = (wordIndex.current + 1) % words.length;
    };

    const run = async () => {
      while (!canceled) {
        await animate();
        await sleep(300);
      }
    };
    run();

    return () => {
      canceled = true;
    };
  }, []);

  return (
    <section
      id="hero"
      className="bg-[radial-gradient(circle_at_50%,#9ff76a,transparent)] overflow-hidden"
    >
      <Container className="min-h-screen pt-[calc(var(--spacing-header-h)+var(--spacing-section-p))] text-center">
        <h2 className="text-[40px]">Some simple utilities</h2>
        <p
          ref={wordElement}
          className="font-[600] text-[60px] min-h-[90px]"
        ></p>
        <p className="mt-[40px] mx-auto max-w-[min(550px,100%)] text-text-color-light">
          Try some of our useful apps including prayer times, notes, clock, and
          many others!
        </p>
        <a
          href="#apps"
          className="w-[30px] h-[30px] mx-auto mt-[50px] rounded-full bg-white flex justify-center items-center cursor-pointer animate-bounce [animation-duration:1.7s]"
        >
          <i className="fa-solid fa-arrow-down text-primary-darkest"></i>
        </a>

        <div className="hidden sm:flex justify-center items-start gap-[10px] mt-[50px] h-[240px]">
          <div>
            <img
              src="/temp.png"
              alt="screenshot1"
              className="w-[200px] max-w-full transform-[translateY(50px)_rotate(-20deg)]"
            />
          </div>
          <div>
            <img
              src="/temp.png"
              alt="screenshot1"
              className="w-[200px] max-w-full"
            />
          </div>
          <div>
            <img
              src="/temp.png"
              alt="screenshot1"
              className="w-[200px] max-w-full transform-[translateY(50px)_rotate(20deg)]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
