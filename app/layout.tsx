import "tailwindcss/tailwind.css";

import { PropsWithChildren } from "react";
import NavLink from "../components/NavLink";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html className="bg-gray-900 text-gray-100 antialiased">
      <head>
        <title>Nested layouts by example</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <header className="border-b p-4">
          <nav className="space-x-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/pokemon">Pokemon</NavLink>
          </nav>
        </header>
        <div className="p-4">{children}</div>
      </body>
    </html>
  );
}
