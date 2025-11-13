import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="hidden absolute bottom-4 left-12 xl:flex gap-4">
      <Link href={"/"} className="underline">
        Home
      </Link>
      <Link href={"/prompt-edit"} className="underline">
        Prompts
      </Link>
      <Link href={"/cut-tool"} className="underline">
        Cut Tool
      </Link>
      <Link href={"/terms"} className="underline">
        Terms of Service
      </Link>
      <Link href={"/privacy"} className="underline">
        Privacy Policy
      </Link>
    </footer>
  );
}
