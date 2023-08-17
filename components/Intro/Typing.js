import { demoResume } from '@/lib/data';
import React, { useEffect, useState } from 'react'

export default function Typing() {
    const displayContents = ["developer","designer","photographer"]
    const [occupation, setOccupation] = useState("developer")
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
    const data = demoResume()

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentLetterIndex((prevIndex) => {
          if (prevIndex < displayContents[currentWordIndex].length - 1) {
            return prevIndex + 1;
          } else {
            setCurrentWordIndex((prevWordIndex) => {
              if (prevWordIndex < displayContents.length - 1) {
                return prevWordIndex + 1;
              } else {
                return 0;
              }
            });
            return 0;
          }
        });
      }, 200); // Adjust the interval duration as per your preference
  
      return () => {
        clearInterval(interval);
      };
    }, [currentWordIndex]);
  
    useEffect(() => {
      setOccupation(displayContents[currentWordIndex]);
    }, [currentWordIndex]);
  return (
    <div className='text-white text-center flex align-middle justify-center h-screen'>
           {data&& (
            <div className='my-auto'>
                 <h1 className='text-5xl font-semibold tracking-widest'>{data?.personal?.firstName} {data.personal.lastName}</h1>
            <p className='text-xl'> I am a {occupation.substring(0, currentLetterIndex + 1)+".|"} </p>
            </div>
           )}
    </div>
  )
}
