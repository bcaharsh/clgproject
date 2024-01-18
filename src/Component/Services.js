import React from 'react';
import { Typography } from "@material-tailwind/react";
import {
  Card,
  CardBody,
  CardFooter,
  Button,
} from "@material-tailwind/react";


export default function Services() {
  return (
    <>
      {/* header of service */}
      <div className='mt-4 grid lg:grid-rows-2  sm:grid-cols-1 w-full p-8'>
        <div className=''>
          <Typography variant="h2" className='text-sand'>
            WHAT WE DO
          </Typography>
        </div>
        <div>
          <Typography className='text-moss-green font-bold ' variant='h1'>
            SERVICES WE OFFER
          </Typography>
        </div>
      </div>
      {/* end header of service */}

      {/* card container for services */}
      <div className='grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2  sm:grid-cols-2  justify-items-center '>
        {/* card first start */}
        <div >
          <Card className="mt-6 lg:w-80 md:w-80 sm:w-1/2 m-2 ">
            <img
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="card-image"
              className='h-96 w-96 rounded-lg object-cover object-center'
            />
            {/* <CardHeader color="blue-gray" className="relative h-56">
      </CardHeader> */}
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Book Soil-Test Lab
              </Typography>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min by
                walk and near to &quot;Naviglio&quot; where you can enjoy the main
                night life in Barcelona.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button className='bg-hunter-green'>Read More</Button>
            </CardFooter>
          </Card>
        </div>
        {/* card first end */}

        {/* card second start */}
        <div >
          <Card className="mt-6 lg:w-80 md:w-80 sm:w-1/2 m-2 ">
            <img
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="card-image"
              className='h-96 w-96 rounded-lg object-cover object-center'
            />
            {/* <CardHeader color="blue-gray" className="relative h-56">
      </CardHeader> */}
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Book Soil-Test Lab
              </Typography>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min by
                walk and near to &quot;Naviglio&quot; where you can enjoy the main
                night life in Barcelona.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button className='bg-hunter-green'>Read More</Button>
            </CardFooter>
          </Card>
        </div>
        {/* card second end */}

        {/* card third start  */}
        <div >
          <Card className="mt-6 lg:w-80 md:w-80 sm:w-1/2 m-2">
            <img
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="card-image"
              className='h-96 w-96 rounded-lg object-cover object-center'
            />
            {/* <CardHeader color="blue-gray" className="relative h-56">
      </CardHeader> */}
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Crop Preservation 
              </Typography>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min by
                walk and near to &quot;Naviglio&quot; where you can enjoy the main
                night life in Barcelona.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button className='bg-hunter-green'>Read More</Button>
            </CardFooter>
          </Card>
        </div>
        {/* card third end */}

        {/* card fourth start */}
        <div>
          <Card className="mt-6 lg:w-80 md:w-80 sm:w-1/2 m-2">
            <img
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="card-image"
              className='h-96 w-96 rounded-lg object-cover object-center'
            />
            {/* <CardHeader color="blue-gray" className="relative h-56">
      </CardHeader> */}
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Buy Fertilizer 
              </Typography>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min by
                walk and near to &quot;Naviglio&quot; where you can enjoy the main
                night life in Barcelona.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button className='bg-hunter-green'>Read More</Button>
            </CardFooter>
          </Card>
        </div>
        {/* card fourth end */}
      </div>
      {/* card container for services  */}
    </>
  )
}
