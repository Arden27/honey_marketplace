import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <div
      className="relative flex h-header-sm justify-center
      md:h-header-lg"
    >
      <div
        className="absolute -top-4 z-10
              h-[calc(theme(spacing.3xl)+3rem)] w-[calc(theme(spacing.3xl)+3rem)] rounded-full bg-header
              md:h-[calc(theme(spacing.3xl)+theme(spacing.sm)+3rem)] md:w-[calc(theme(spacing.3xl)+theme(spacing.sm)+3rem)]
            "
      ></div>

      <Link className="flex justify-center" href="/">
        <Image
          className="z-50 h-[calc(theme(spacing.3xl)+1rem)] w-[calc(theme(spacing.3xl)+1rem)] rounded-full 
                md:h-[calc(theme(spacing.3xl)+theme(spacing.sm)+1rem)] md:w-[calc(theme(spacing.3xl)+theme(spacing.sm)+1rem)]"
          src="/img/boxes/logo.png"
          width={80}
          height={80}
          alt="Logo pasieki Kurpiowski Bartnik"
        />
      </Link>
    </div>
  );
}
