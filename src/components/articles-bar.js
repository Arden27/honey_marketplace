import React from "react";

export default function ArticlesBar() {
  return (
    <section className="articles-bar">
      <article className="articles-bar article-bar-1">
        <h2
          className="font-bold m-3 p-3 flex text-9xl text-yellow-600 

        justify-center container"
        >
          ARTYKUŁ1
        </h2>
      </article>
      <article className="articles-bar article-bar-2">
        <h2>ARTYKUŁ2</h2>
      </article>

      <article className="articles-bar article-bar-3">
        <h2>ARTYKUŁ3</h2>
      </article>

      <article className="articles-bar article-bar-4">
        <h2>ARTYKUŁ4</h2>
      </article>
    </section>
  );
}
