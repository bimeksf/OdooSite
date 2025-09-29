import type { FC } from "react";
import { twMerge } from "tailwind-merge";

export interface IContainer {
  className?: string;
  children: React.ReactNode;
  noRelative?: boolean;
}

const Container: FC<IContainer> = (props) => {
  const { className, children, noRelative = false } = props;

  return (
    <div
      className={twMerge(
        "max-w-[100%] px-[16px] md:px-8 lg:px-8 xl:max-w-[1180px] 2xl:max-w-[1328px] 3xl:max-w-[1440px] 4xl:max-w-[1640px] 5xl:max-w-[1840px] block mx-auto",
        noRelative ? "" : "relative",
        className
      )}
    >
      {/* max-w-[78.75rem] */}
      {children}
    </div>
  );
};

export default Container;
