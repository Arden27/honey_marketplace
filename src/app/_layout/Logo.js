import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <div
      className="flex h-[calc(theme(spacing.2xl)+theme(spacing.sm))] justify-center"
    >
      <div className="absolute -top-2xs h-[calc(theme(spacing.3xl)+theme(spacing.xs))] w-[calc(theme(spacing.3xl)+theme(spacing.xs))] rounded-b-full bg-header shadow "></div>

      <div className="absolute h-[calc(theme(spacing.2xl)+theme(spacing.sm))] w-[calc(theme(spacing.3xl)+theme(spacing.xs)+11px)] bg-header"></div>

      <Link className="flex justify-center" href="/">
        <Image
          className="absolute h-[calc(theme(spacing.2xl)+theme(spacing.md))] w-[calc(theme(spacing.2xl)+theme(spacing.md))] rounded-full "
          src="/img/test_logo.png"
          width={80}
          height={80}
          alt="Logo Pasieki Dobry Bartnik"
        />
      </Link>
    </div>
  );
}
