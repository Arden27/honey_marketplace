import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <div
      className="flex h-[calc(theme(spacing.2xl)+theme(spacing.sm))] justify-center"
    >
      <div className="fixed -top-2xs h-[calc(theme(spacing.3xl)+theme(spacing.xs))] w-[calc(theme(spacing.3xl)+theme(spacing.xs))] rounded-b-full bg-header shadow "></div>

      <div className="fixed h-[calc(theme(spacing.2xl)+theme(spacing.sm))] w-[calc(theme(spacing.3xl)+theme(spacing.xs)+0.9rem)] bg-header"></div>

      <Link className="flex justify-center" href="/">
        <Image
          className="fixed h-[calc(theme(spacing.2xl)+theme(spacing.md))] w-[calc(theme(spacing.2xl)+theme(spacing.md))] rounded-full "
          src="/img/test_logo.png"
          width={80}
          height={80}
          alt="Logo Pasieki Dobry Bartnik"
        />
      </Link>
    </div>
  );
}
