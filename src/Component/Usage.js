import React from 'react';
import { Typography } from "@material-tailwind/react";

export default function Usage() {
    return (
        <>
            <div className='choss'>
                <div className='choss-titel'>
                    <Typography variant='h1' color='white' className=''>
                        WHY USE OUR SERVICES
                    </Typography>
                </div>
                    <div className='grid lg:grid-cols-3 sm:grid-cols-1 justify-items-center mt-4 text-center'>
                        <div className='bg-gray-200  rounded-full h-60 p-8 border-sand border-8 w-72 m-1 '>
                            <p className='text-moss-green'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat mollitia et consectetur omnis rem quisquam dolores perferendis iure est voluptatibus!</p>
                        </div>
                        <div className='bg-gray-200  rounded-full h-60 p-8 border-sand border-8 w-72 m-1'>
                            <p className='text-moss-green'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat mollitia et consectetur omnis rem quisquam dolores perferendis iure est voluptatibus!</p>
                        </div>
                        <div className='bg-gray-200  rounded-full h-60 p-8 border-sand border-8 w-72 m-1'>
                            <p className='text-moss-green'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat mollitia et consectetur omnis rem quisquam dolores perferendis iure est voluptatibus!</p>
                        </div>
                    </div>
                </div>
        </>
    )
}
