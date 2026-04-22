import { NavLink } from "react-router";

type Props = {
  icon: string;
  title: string;
  description: string;
  appPath: string;
};

export default function Card(props: Props) {
  return (
    <div className="p-[24px] rounded-[24px] w-[300px] shadow-[0_5px_10px_#3c485826] transition-transform duration-300 group cursor-pointer hover:transform-[translateY(-2px)] ">
      <div className="w-[64px] h-[64px] flex justify-center items-center rounded-[16px] bg-primary-lightest text-primary-darkest shadow-[0_2px_4px_#3c485826]">
        <i className={`${props.icon} text-inherit text-[25px]`}></i>
      </div>
      <h3 className="mt-[28px] text-[20px] font-[500]">{props.title}</h3>
      <p className="mt-[12px] text-slate-500 leading-[1.7] text-[14px]">{props.description}</p>
      <NavLink
        to={`/apps/${props.appPath}`}
        className="flex items-center gap-[10px] w-fit mt-[12px] text-[15px] transition-colors duration-300 hover:text-primary-dark"
      >
        See more
        <i className="fa-solid fa-arrow-right-long text-inherit group-hover:animate-point-right"></i>
      </NavLink>
    </div>
  );
}
