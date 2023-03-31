"use client"

import { useEffect, useRef, useState } from "react";


type ParallaxButtonProps = {
    contents: { imageUrl: string }[];
  };
  
  const ThreeButtons = ({ contents }: ParallaxButtonProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
  
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      // const scrollHeight = document?.querySelector('.leticia')?.scrollHeight - window.innerHeight
      const scrollFraction = scrollTop / scrollHeight;
      const index = Math.floor(scrollFraction * contents.length);
      setActiveIndex(index);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const activeContent = contents[activeIndex];
  
    return (
      <div className="relative">
        <img src={activeContent.imageUrl} alt="" className="h-screen w-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="flex space-x-4">
              {contents.map((content, index) => (
                <button
                  key={index}
                  className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l ${
                    activeIndex === index ? 'bg-blue-700' : ''
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  Button {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ThreeButtons;