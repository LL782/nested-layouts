import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export function Code({ children }: Props) {
  return <code className="bg-gray-700 pl-2 pr-2">{children}</code>;
}
