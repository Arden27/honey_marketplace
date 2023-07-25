import React from "react";
import Link from "next/link";

export default function AboutBox() {
  return (
    <section className=" my-3xl w-full bg-about-box-bg pb-2xl pt-3xl">
      <article className="w-100 mx-auto flex max-w-[80ch] flex-col">
        <h2 className="font-serif text-m">Miód z Kurpiów</h2>
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

        <Link className="w-fit self-end border-2 font-btn" href="/o-nas">
          Czytaj dalej
        </Link>
      </article>
    </section>
  );
}
