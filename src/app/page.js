import React from 'react';

import Image from 'next/image'
import styles from './page.module.css'

import Slider from './components/Slider';
import HowTo from './components/HowTo';
import Description from './components/Description';
import Register from './components/Register';
import Favourites from './components/Favourites';
import Articles from './components/Articles';

export default function Home() {
  return (
    <main className={styles.main}>
      <Slider />
      <HowTo />
      <Description />
      <Register />
      <Favourites />
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <Articles />
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.js</code>
        </p>
        
      </div>
    </main>
  );
}
