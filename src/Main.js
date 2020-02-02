import React from 'react';
import './Main.css';



function Main() {

 
  return (
    <main>
      <h1>CoronaVirus - <span>nCoV2019</span></h1>
      <h3>The newest global epidemic in town is already all over the place!</h3>
      <p>Let's not be dramatic though!
         If you are reading this, humanity probably hasn't come to its end yet (and it most likely won't 
         anytime soon). Still, here are some tips to avoid contagion, or if you are already infected, to 
         take the proper steps.
      </p>
      <div id="buttonHolder">
        <button>What is this thing?</button>
        <button>How do I protect myself?</button>
        <button>I think I have the Coronavirus!! AAAAH!!</button>
      </div>
    </main>  
  );
}

export default Main;
