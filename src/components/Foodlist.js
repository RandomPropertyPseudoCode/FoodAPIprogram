import React from 'react'
import './funfact.css';
import Carosel  from 'react-bootstrap/Carousel';

import mcdonalds from './mcdonalds.jpg';
import cranberries2 from './cranberries2.jpg';
import tonic from './tonic.jpeg';
import pizza from './pizza.jpg';
import coffee from './coffee.jpg';

export const Foodlist = () => {
  return <div className='this__fun'>
<Carosel class="foodfact1">
<Carosel.Item style={{backgroundColor: 'gray'}}>
<img className='fun__img' src={mcdonalds} height="600" width="1000" />
<Carosel.Caption>
<h2 className='fun__header'>Fun Food Facts!</h2>
<p>Did you know that Mcdondalds Sells 2.5 Billion burgers every year! Thats insane!</p>
</Carosel.Caption>
</Carosel.Item>

<Carosel.Item style={{backgroundColor: 'gray'}}>
<img className='fun__img' src={cranberries2} height='600' width="1000"/>
<Carosel.Caption>
<h2>Fun Food Facts!</h2>
<p style={{backgroundColor: 'solid black'}}>Did you know. That is cranberries are ripe enough. <br></br>They will bounce on the floor like a rubber ball!</p>
</Carosel.Caption>
</Carosel.Item>

<Carosel.Item style={{backgroundColor: 'gray'}}>
<img className='fun__img' src={tonic} height='600' width="1000"/>
<Carosel.Caption>
<h2 className='fun__header'>Fun Food Facts!</h2>
<p>Did you know that Tonic water actually glowes in the dark! <br></br>Only when under a uv light though. This is due to a chemical called quinine.</p>
</Carosel.Caption>
</Carosel.Item>


<Carosel.Item style={{backgroundColor: 'gray'}}>
<img className='fun__img' src={pizza} height='600' width="1000"/>
<Carosel.Caption>
<h2 className='fun__header'>Fun Food Facts!</h2>
<p>Did you know that the most expensive pizza in the world costs 12,000$. Thats just insane. <br></br> This pizza is actually located in Salerno, Italy and you can go buy one right now if you wanted to!</p>
</Carosel.Caption>
</Carosel.Item>


<Carosel.Item style={{backgroundColor: 'gray'}}>
<img className='fun__img' src={coffee} height='600' width="1000"/>
<Carosel.Caption>
<h2 className='fun__header'>Fun Food Facts!</h2>
<p>Even though you ordered a decaf coffee, there is still actually caffine in it! <br></br> decaf only contains 2mg while caffinated coffee is 95mg. </p>
</Carosel.Caption>
</Carosel.Item>
</Carosel>


</div>
}
