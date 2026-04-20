import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
  children?: ReactNode | ReactNode[];
};

export default function Container(props: Props) {
  return (
    <div className={twMerge("container", props.className)}>
      {props.children}
    </div>
  );
}
