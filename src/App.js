import React from 'react';
import './App.css';
import Goods from './components/Goods';

const data = [
  {
    name: 'Нямушка',
    description: 'с фуагра',
    portions: '10 порций',
    presents: 'мышь в подарок',
    weight: '0,5',
    comments: '',
    image: "../img/Photo.png",
    selected: 'Печень утки разварная с артишоками.',
    available: true,
  },
  { 
    name: 'Нямушка',
    description: 'с рыбой',
    portions: '40 порций',
    presents: '2 мыши в подарок',
    weight: '2',
    comments:'',
    image: "../img/Photo.png",
    selected: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
    available: true,
  },
  { 
    name: 'Нямушка',
    description: 'с курой',
    portions: '100 порций',
    presents: '5 мышей в подарок',
    weight: '5',
    comments: 'заказчик доволен',
    image: "../img/Photo.png",
    selected: 'Филе из цыплят с трюфелями в бульоне.',
    available: false,
  },
]

function App() {
  
  return (
  <div className="wrapper">
    <header>
        <h1>Ты сегодня покормил кота?</h1>
    </header>
    <main>
      <Goods data={data}/>
    </main>
  </div>
  
  );
}
export default App;
