import { useEffect, useRef } from "react";
import Container from "./UI/Container";
import { sleep } from "../utils/mainUtils";

export default function Landing() {
  const alternatingWords = [
    "Prayer Times",
    "Currency Converter",
    "Notes",
    "Clock",
    "To-do List",
    "Weather",
    "Quiz",
    "Calculator",
  ];
  const wordEl = useRef<HTMLParagraphElement>(null);
  const wordState = useRef({
    currentWord: "Prayer Times",
    isAnimating: false,
  });

  useEffect(() => {
    const animate = async () => {
      if (wordState.current.isAnimating || !wordEl.current) return;

      wordState.current.isAnimating = true;

      while (wordState.current.currentWord.length > 0) {
        wordEl.current.textContent = wordState.current.currentWord;
        await sleep(100);
        wordState.current.currentWord = wordState.current.currentWord.slice(
          0,
          -1,
        );
      }

      const newWord =
        alternatingWords[Math.floor(Math.random() * alternatingWords.length)];

      for (let i = 0; i <= newWord.length; ++i) {
        wordEl.current.textContent = wordState.current.currentWord;
        await sleep(100);
        wordState.current.currentWord = newWord.slice(0, i + 1);
      }

      wordState.current.isAnimating = false;
    };

    const interval = setInterval(animate, 3000);
    animate();
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="bg-[radial-gradient(circle_at_50%,#9ff76a,transparent)] overflow-hidden"
    >
      <Container className="min-h-screen pt-[calc(var(--spacing-header-h)+var(--spacing-section-p))] text-center">
        <h2 className="text-[40px]">Some simple utilities</h2>
        <p ref={wordEl} className="font-[600] text-[60px] min-h-[90px]"></p>
        <p className="text-text-color-light">
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
