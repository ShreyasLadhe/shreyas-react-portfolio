import React from 'react'
import { useEffect, useState } from 'react'

const TextChange = () => {
  const texts = ["Hi I am Shreyas", "Hi I am Shreyas", "Hi I am Shreyas"];
  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(true);
  const [isForward, setIsForward] = useState(true);
  const [Index, setIndex] = useState(0);

  useEffect(() => {
    const interValid = setInterval(() => {
        setCurrentText(texts[Index].substring(0,endValue));
        if(isForward) {
            setEndValue((prev)=>prev+1);
        }else {
            setEndValue((prev)=>prev-1);
        }
        if(endValue > texts[Index].length+10) {
            setIsForward(false)
        }
        if(endValue < 2.1) {
            setIsForward(true)
            setIndex((prev)=>prev&texts.length)
        }
    }, 50);

    return () =>clearInterval(interValid)
  }, [endValue, isForward, Index, texts])
  return <div className='transition ease duration-300'>{currentText}</div>
}

export default TextChange