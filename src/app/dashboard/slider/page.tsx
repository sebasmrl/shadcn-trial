'use client';

import { Slider } from "@/components/ui/slider";
import { useState } from "react";

export default function SliderPage() {

  const [sliderValue, setSliderValue] = useState(10);
  const [rangeValue, setRangeValue] = useState([10,20]);

  return (
    <div className="grid  grid-cols-1">
      <span>Slider Value: {sliderValue}</span>
       <Slider
      defaultValue={[sliderValue]}
      max={100}
      step={1} //va de 1 en 1
      onValueChange={ (value)=> setSliderValue(value[0])}
      sliderColor="bg-red-400"
    />

    <span>Slider Value:{rangeValue.join(', ')}</span>
       <Slider
      defaultValue={rangeValue}
      max={100}
      step={1} //va de 1 en 1
      onValueChange={ setRangeValue}
    />

    </div>
  );
}