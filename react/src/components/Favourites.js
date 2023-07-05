import React from 'react';

function Favourites() {
  return (
    <section className="favourites">ULUBIONE</section>
  );
}

export default Favourites;

/*
Just like the other components, 
if you want to make the text dynamic, 
you can pass it as a prop to the Favourites component. 
Here's an example:
*/

/*
import React from 'react';

function Favourites({ text }) {
  return (
    <section className="favourites">{text}</section>
  );
}

export default Favourites;
*/

/*
In this version, 
text would be a string you pass to the Favourites component as a prop. 
The text is inserted directly into the section element.
*/