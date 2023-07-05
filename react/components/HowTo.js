import React from 'react';

function HowTo() {
  return (
    <section className="how-to">Jak poznać prawdziwy miód?</section>
  );
}

export default HowTo;
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