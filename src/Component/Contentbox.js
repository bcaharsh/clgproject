import { Typography } from '@material-tailwind/react'
import React from 'react'

export default function Contentbox() {
  return (
    <>
    <div className='p-5'>
        <h1 className="text-4xl font-bold mb-5 text-hunter-green">What is Crop preservation?</h1>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 '>
            <div className='p-4'>
        <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, doloremque atque! Ut voluptas nihil voluptate ab placeat qui labore quos aspernatur veritatis consequatur saepe reiciendis provident amet magni hic explicabo inventore asperiores minima velit earum, iste cupiditate quibusdam maxime ea? Fuga laudantium dignissimos ipsa mollitia. Eligendi quisquam ad harum nam, id voluptatibus ducimus doloribus. Nostrum blanditiis qui doloribus architecto eius, rem eligendi vero? Amet temporibus vitae eligendi, beatae rem libero maxime dicta! Sapiente ab eveniet corporis molestias dignissimos enim nam labore fugit alias impedit ex laudantium quod ducimus suscipit aut sed, maiores error quia deserunt voluptatem velit. Ullam, quidem eligendi.</Typography>
            </div>
            <div className='m-auto'>
        <img src="https://images.unsplash.com/photo-1612204103637-ed2ab9df960e?q=80&w=1910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="preservation" className=' w-96 h-96 rounded-lg object-cover object-center' />
            </div>
        </div>
    </div>
    </>
  )
}
