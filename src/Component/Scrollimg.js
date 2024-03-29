import React from 'react';
import { Carousel } from "@material-tailwind/react";

export default function Scrollimg() {
  return (
    <>
    <Carousel className="rounded-xl" autoplay='true' loop='true' autoplayDelay='4000' navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}>
          <div className="relative h-screen w-full overflow-hidden">
 <img
    src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
    alt="image 1"
    className="absolute h-screen w-full object-cover object-center"
 />
 <div className="absolute pb-6 inset-0 bg-black bg-opacity-50 flex items-end justify-center">
    <p className="text-white text-xl">Image 1 Text</p>
 </div>
</div>

<div className="relative h-screen w-full overflow-hidden">
 <img
    src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
    alt="image 2"
    className="absolute h-screen w-full object-cover object-center"
 />
 <div className="absolute pb-6 inset-0 bg-black bg-opacity-50 flex items-end justify-center">
    <p className="text-white text-xl">Image 2 Text</p>
 </div>
</div>

<div className="relative h-screen w-full overflow-hidden">
 <img
    src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
    alt="image 3"
    className="absolute h-screen w-full object-cover object-center"
 />
 <div className="absolute pb-6 inset-0 bg-black bg-opacity-50 flex items-end justify-center">
    <p className="text-white text-xl">Image 3 Text</p>
 </div>
</div>
        </Carousel>
    </>
  )
}
