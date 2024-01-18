import React from 'react';
import { Typography,Button } from "@material-tailwind/react";
import { useState } from 'react';

// function text(){
//   return(
//     <div>
//       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae voluptate dolore quae ea adipisci non! Quod ex nam quis eos velit cumque possimus, voluptatum perspiciatis facere vel sit laudantium sapiente sequi suscipit quae, ipsa adipisci ut at quam commodi nesciunt nostrum iusto. Ea maiores beatae consequuntur magni dignissimos autem rerum.</p>
//     </div>
//   );
// }
export default function About() {
  // const [displayText, setDisplayText] = useState('Initial Text');
  // const handleShowMore = () => {
  //   // Add more text to the existing text
  //   setDisplayText((prevText) => prevText +text() );
  // };
  return (
    <>
      <div className='mt-6 grid lg:grid-cols-2 md:grid-cols-1 p-8 w-full'>
        <div className='p-6'>
        <Typography variant="h2" className='text-sand'>
          About 
        </Typography>
        <Typography className='text-moss-green font-bold' variant='h1'>
          OUR PROJECT
        </Typography>
         <Typography className='' variant='small'>
           Material Tailwind is an easy to use components library for Tailwind CSS
           and Material Design. It provides a simple way to customize your
           components, you can change the colors, fonts, breakpoints and everything
           you need. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, eius odit nemo temporibus, soluta eaque repellat magni in cupiditate quod accusantium consectetur id velit nulla totam assumenda? Aliquid, soluta architecto.
         </Typography>
         {/* <p>{displayText}</p> */}
         <Button size="lg" className='mt-4 bg-hunter-green'>Know More</Button>
         </div>
         <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
          <div>
         <img
      className="h-full w-full rounded object-cover object-center"
      src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
      alt="nature image"
    />
          </div>
          <div className='p-6'>
         <img
      className="lg:h-60 sm:h-full lg:w-60 sm:w-full place-content-center rounded object-cover object-center"
      src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
      alt="nature image"
    />
          </div>
    </div>
      </div>
    </>
  )
}
