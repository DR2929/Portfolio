"use client";

import { motion, MotionProps } from "framer-motion";
import { PropsWithChildren } from "react";

type RevealOnScrollProps = PropsWithChildren<
  {
    as?: "div" | "section";
  } & MotionProps
>;

export default function RevealOnScroll({
  children,
  as = "div",
  ...rest
}: RevealOnScrollProps) {
  const Component = motion[as];

  return (
    <Component
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 0.5 }}
      {...rest}
    >
      {children}
    </Component>
  );
}

