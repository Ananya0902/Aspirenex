"use client";

import { ReactNode } from 'react';
import CustomCursor from "./components/CustomCursor";

type Props = {
  children: ReactNode;
};

export default function CustomCursorProvider({ children }: Props) {
  return (
    <>
      <CustomCursor />
      {children}
    </>
  );
}
