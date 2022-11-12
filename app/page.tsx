import Link from "next/link";
import { Code } from "./Code";

export default function Page() {
  return (
    <div className="text-lg">
      <h1 className="text-3xl mb-5">Nested Layouts Demo</h1>
      <p className=" mb-5">
        This project is an example of how to use the <Code>App</Code> directory
        from Next.js 13
      </p>
      <ul className="list-disc pl-10  mb-5">
        <li>Nested layout and page components</li>
        <li>Server and client components</li>
        <li>
          <Code>generateStaticParams</Code>
        </li>
      </ul>
      <p>
        <Link
          href="https://github.com/LL782/nested-layouts"
          className="underline"
        >
          See the source code for details
        </Link>
      </p>
    </div>
  );
}
