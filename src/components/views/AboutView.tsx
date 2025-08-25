"use client";
import { SimpleReveal, AnimationsDemo } from "@animations";
import { FC } from "react";
import { useViewStore } from "@stores";

interface Props {}

const AboutView: FC<Props> = (props: Props) => {
  const { showView } = useViewStore();

  return (
    <div className="w-full h-full flex flex-col items-center justify-center py-24 gap-6"></div>
  );
};

export default AboutView;
