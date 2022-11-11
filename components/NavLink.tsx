"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
}

export default function NavLink({ href, children }: Props) {
  const segment = useSelectedLayoutSegment();
  const urlLeaf = href.split("/").pop();
  const active = `${segment || ""}` === urlLeaf;

  return (
    <Link className={active ? "underline" : ""} href={href}>
      {children}
    </Link>
  );
}
