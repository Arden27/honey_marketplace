import React from 'react';

function Description() {
  return (
    <article className="description">Miód z Kurpiów</article>
  );
}

export default Description;

/*
Just like the Articles component, 
if you want to render this Description component dynamically, 
you could pass the text as a prop. 
Here's an example of how you could do that:

import React from 'react';

function Description({ text }) {
  return (
    <article className="description">{text}</article>
  );
}

export default Description;

*/