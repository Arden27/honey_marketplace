import React from 'react';
import Link from 'next/link';  // Import Link from Next.js
import styles from '../page.module.css';

export default function HowTo() {
  return (
    <Link href="/howto">
      <h2 className={styles.card}>
        Jak poznać prawdziwy miód? <span>-&gt;</span>
      </h2>
    </Link>
  );
}

/*
And again, if you want the text to be dynamic, 
you could pass it as a prop like so:
*/

/*
import React from 'react';

function HowTo({ text }) {
  return (
    <section className="how-to">{text}</section>
  );
}

export default HowTo;
*/

/*
This way, you can use the HowTo component in your application 
and provide the text dynamically:

<HowTo text="Jak poznać prawdziwy miód?" />
*/