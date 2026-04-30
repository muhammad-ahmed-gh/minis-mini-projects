import clsx from "clsx";
import type { Dispatch, SetStateAction } from "react";

function BurgerBar({ isMenuOpen }: { isMenuOpen: boolean }) {
  return (
    <span
      className={clsx(
        "block h-[3px] rounded-full transition-[background-color_opacity_transform] duration-300 bg-[#3c4858]",
        isMenuOpen &&
          "first:transform-[translateY(calc(3px+5px))_rotate(45deg)] nth-[2]:opacity-0 last:transform-[translateY(calc(-3px-5px))_rotate(-45deg)]",
      )}
    ></span>
  );
}

type Props = {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export default function HeaderBurger(props: Props) {
  const handleClick = () => {
    props.setIsMenuOpen((prev) => !prev);
  };

  return (
    <div
      className="flex flex-col justify-center gap-[5px] w-[25px] cursor-pointer md:hidden"
      onClick={handleClick}
    >
      <BurgerBar isMenuOpen={props.isMenuOpen} />
      <BurgerBar isMenuOpen={props.isMenuOpen} />
      <BurgerBar isMenuOpen={props.isMenuOpen} />
    </div>
  );
}
