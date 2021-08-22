import React from 'react'
import Slider from '../Slider/Slider';


const SLIDE_COUNT = 3;
const slides = Array.from(Array(SLIDE_COUNT).keys());

export default function Body() {

  return (
    <Slider slides={slides}/>
  );
}
