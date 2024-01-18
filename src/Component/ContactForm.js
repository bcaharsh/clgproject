import React from 'react';
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Textarea,
  } from "@material-tailwind/react";
  import Map from './Map';

export default function ContactForm() {
  return (
    <>
    <div className='grid lg:grid-cols-2 md:grid-cols-1 place-content-center mt-7'>
        <div>
        <Card color="transparent" shadow={false}>
      <Typography variant="h4" className='text-center text-hunter-green'>
      OUR CONTACT
      </Typography>
      <Typography color="gray" className="mt-1 text-4xl font-black text-center font-display">
      REQUSTE A CALL BACK
      </Typography>
      <div className="flex justify-center items-center">
      <form className="mt-6 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Input size="lg" label="Your Name" />
          <Input size="lg" placeholder="name@mail.com" label="Mail Id" />
          <Input type="numeric" size="lg" label="Mobile Number" />
          <Textarea label="Message" />
        </div>

        <Button className="mt-6" fullWidth>
          Send
        </Button>
      </form>
    </div>
    </Card>
        </div>
        <div className='flex justify-center items-center'>
            <Map/>
        </div>
    </div>
    </>
  )
}
