import clsx from "clsx";
import { useEffect, useState } from "react";
import HeaderLinks from "./HeaderLink";
import HeaderBurger from "./HeaderBurger";
import Container from "./UI/Container";

export default function HomeHeader() {
  const [areWeDown, setAreWeDown] = useState(window.scrollY > 50);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setAreWeDown(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed z-[9999] top-0 left-0 right-0 transition-[background-color_box-shadow] duration-300 shadow-[0_0_3px_#161c2d26] bg-[#ffffff90] backdrop-blur-[5px]",
        areWeDown
          ? "md:shadow-[0_0_3px_#161c2d26] md:bg-[#ffffff90] md:backdrop-blur-[5px]"
          : "md:shadow-none md:bg-transparent md:backdrop-blur-[0px]",
      )}
    >
      <Container className="flex justify-between items-center h-header-h">
        <h1 className="uppercase">
          <a
            href="#hero"
            className="font-bold text-[#3c4858] text-[20px] [letter-spacing:3px]"
          >
            Minis
          </a>
        </h1>
        <div className="flex items-center">
          <HeaderBurger isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <HeaderLinks isMenuOpen={isMenuOpen} />
        </div>
      </Container>
    </header>
  );
}
