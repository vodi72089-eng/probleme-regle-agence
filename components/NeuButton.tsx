// From Uiverse.io by adamgiebl - https://uiverse.io/adamgiebl/good-mouse-67
// MIT License, Copyright (c) adamgiebl (Adam Giebl)

import type { ReactNode } from "react";

export default function NeuButton({
  children,
  href = "#contact",
  className = "",
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <a href={href} className={`pr-neu-button ${className}`}>
      {children}
    </a>
  );
}
