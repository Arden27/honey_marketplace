import React from 'react';

function Articles() {
  return (
    <section className="articles">
        <article className="articles article-1">ARTYKUŁ1</article>
        <article className="articles article-2">ARTYKUŁ2</article>
        <article className="articles article-3">ARTYKUŁ3</article>
        <article className="articles article-4">ARTYKUŁ4</article>
    </section>
  );
}

export default Articles;

/*
This is a very simple static component. 
If you want to render these articles dynamically from some data source, 
you'd typically want to pass data in via props and map over it to create your article elements. 
Here's an example of how you could do that:


import React from 'react';

function Articles({ articles }) {
  return (
    <section className="articles">
        {articles.map((article, index) => (
          <article key={index} className={`articles article-${index+1}`}>{article}</article>
        ))}
    </section>
  );
}

export default Articles;

*/