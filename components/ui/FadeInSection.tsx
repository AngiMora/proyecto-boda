"use client";

import { ReactNode } from "react";

type FadeInSectionProps = {
  children: ReactNode;
};

export default function FadeInSection({
  children,
}: FadeInSectionProps) {
  return <>{children}</>;
}