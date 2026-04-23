import clsx from "clsx";
import { appsData, type AppRoute } from "../../config/appsConfig";
import { NavLink, useParams } from "react-router";

type Props = {
  isMenuOpen: boolean;
};

export default function AppHeaderLinks(props: Props) {
  const currentRoute = useParams().appId as AppRoute;

  return (
    <ul
      className={clsx(
        "flex flex-col absolute top-full left-0 w-full overflow-hidden transition-[max-height] md:overflow-visible duration-300 md:static md:w-auto md:flex-row md:items-center md:max-h-[initial]",
        props.isMenuOpen ? "max-h-[300px]" : "max-h-0",
      )}
    >
      {appsData[currentRoute].headerLinks.map((link) => (
        <li key={link.id}>
          <NavLink
            to={link.href}
            className={clsx(
              "block p-[10px_10px] bg-white uppercase text-[15px] [letter-spacing:1px] cursor-pointer transition-colors duration-300 md:bg-transparent md:py-[25px] md:px-[15px] text-[#3c4858] hover:text-primary-dark",
            )}
          >
            {link.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
