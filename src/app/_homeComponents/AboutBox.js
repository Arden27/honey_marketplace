import React from "react";
import Link from "next/link";
import Button from "@/components/Button";

export default function AboutBox() {
  return (
    <section className="my-2xl w-full bg-about-box py-2xl">
      <article className="w-100 m-auto grid w-[calc(100%-4*theme(spacing.sm))] max-w-[70ch] grid-cols-1">
        <h1 className="font-serif">Miodem płynąca</h1>
        <p className="font-sans">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque,
          temporibus tenetur nostrum eligendi rerum, et deserunt at minus
          accusantium cum recusandae modi libero sapiente dicta repellat aliquam
          perspiciatis, commodi ullam laboriosam molestias blanditiis dolor
          alias sunt voluptates! Perferendis voluptates modi cupiditate id atque
          dolor asperiores eum molestias tempora, architecto aperiam iste velit
          iusto dignissimos esse aliquam nulla! Optio consequatur expedita
          blanditiis, odit corporis quos ipsa fugit, aliquam
        </p>

        <div className="mt-md flex justify-end">
          <Button
            className="hover:text-about-box "
            href="/sklep/o-nas"
            format="sm"
          >
            Czytaj dalej
          </Button>
        </div>
      </article>
    </section>
  );
}
