import React from 'react';
import Header from './HeaderPage';
import ShoeSecondHand from './body_page/shoe2hand';
export default function Home() {
  return (
    <div>
      <Header />
      <img src={'logo-min.gif'} alt="Logo" />
      <h1>| WIND STORE XIN CHÀOOOO</h1>
      <ShoeSecondHand title="Giày 2 hand" />
      <ShoeSecondHand title="Giày new" isNew />
    </div>
  );
}
