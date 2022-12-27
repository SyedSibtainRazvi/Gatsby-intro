import React from "react";

type buttonProps = {
  label?: string;
};

export const ButtonFullWidth = (props: buttonProps) => {
  return (
    <button className="w-full h-auto px-20 font-semibold text-white uppercase bg-orange-300 rounded-sm py-15 font-mulish tracking-16 focus:outline-none text-14 lg:rounded-l-none lg:rounded-r-sm">
      {props.label}
    </button>
  );
};