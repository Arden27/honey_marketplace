import React from "react";
import Link from "next/link";

export default function HowToBox() {
  return (
    <div className="box h-[40svh] bg-yellow-800 min-h-[30rem] md:h-[calc(100svh-4*theme(spacing.3xl)-theme(spacing.xl)-theme(spacing.2xs))]">
      <h2 className="1">
        Jak poznać <strong>prawdziwy</strong> miód?
      </h2>
    </div>
  );
}
