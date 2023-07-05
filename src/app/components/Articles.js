import React from 'react';

import styles from '../page.module.css'

export default function Articles() {
  return (
    <section className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Miod <span>-&gt;</span>
          </h2>
          <p>Najlepszy miod w Polse</p>
        </a>
        
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Pszczoły <span>-&gt;</span>
          </h2>
          <p>Bzzzzzzzzzzz...... bzzzzzzzzz</p>
        </a>

        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Ule <span>-&gt;</span>
          </h2>
          <p>Domki dla pszczół</p>
        </a>

        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Dupy <span>-&gt;</span>
          </h2>
          <p>Tu znajdziesz najlepsze</p>
        </a>
    </section>
  );
}

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