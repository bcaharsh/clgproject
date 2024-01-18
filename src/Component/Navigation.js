import React from 'react';
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
    Button,
    MobileNav,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Input,
    Drawer,
  } from "@material-tailwind/react";
  import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
  import Logo from '../public/need-of-farmer-to-grow-in-agronomy-high-resolution-logo.png';


  function NavList() {
    return (
      <ul className="rounded-lg flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-bold text-base"
      >
        <a href="/" className="flex items-center hover:text-sand transition-colors">
          Home
        </a>
      </Typography>
      <Menu>
      <MenuHandler>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-bold text-base cursor-pointer"
      >
        <a  className="flex items-center hover:text-sand transition-colors">
          Services
        </a>
      </Typography>
      </MenuHandler>
      <MenuList>
        <MenuItem><a href="/croppres">Crop Preservation</a></MenuItem>
        <MenuItem><a href="/govschem">Goverment Schems</a></MenuItem>
        <MenuItem><a href="#">Fertilizer</a></MenuItem>
        <MenuItem><a href="#">Soil Testing</a></MenuItem>
      </MenuList>
    </Menu>
     
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-bold text-base"
      >
        <a href="/about" className="flex items-center hover:text-sand transition-colors">
         About
        </a>
      </Typography>
      
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-bold text-base"
      >
        <a href="/contactus" className="flex items-center hover:text-sand transition-colors">
          Contact
        </a>
      </Typography>
      
    </ul>
    );
  }

export default function Navigation() {
    const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const [openreg, setOpenreg] = React.useState(false);
  const openoffcanvas = () => setOpenreg(true);
  const closeoffcanvas = () => setOpenreg(false);

    const [openNav, setOpenNav] = React.useState(false);
  
    const handleWindowResize = () =>
      window.innerWidth >= 960 && setOpenNav(false);
  
    React.useEffect(() => {
      window.addEventListener("resize", handleWindowResize);
  
      return () => {
        window.removeEventListener("resize", handleWindowResize);
      };
    }, []);
  return (
    <>
      {/* navigation bar start */}
      <Navbar  className="filter drop-shadow-lg  bg-active rounded-none z-10 mx-auto max-w-full px-6 py-3" >
          <div className="flex items-center justify-between text-blue-gray-900">
          <div className="">
            <img src={Logo} className="rounded-full logo" alt="logo" />
            {/* <a href="" className="text-center text-white font-bold text-xl ml-3 lg:ml-7 ">NFGA</a> */}
            </div>
            <div className="hidden lg:block">
              <NavList />
            </div>
            <div className="flex items-center gap-x-1">
              
            <Button variant="text"
                size="sm"
                color="white"
                className="hidden lg:inline-block" onClick={openDrawer}>Sign up</Button> 
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
                onClick={openoffcanvas}
              >
                <span>Sign in</span>
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <XMarkIcon className="h-6 w-6 text-white" strokeWidth={2} />
              ) : (
                <Bars3Icon className="h-6 w-6 text-white" strokeWidth={2} />
              )}
            </IconButton>
          </div>
          <Collapse open={openNav}>
            <NavList />
          </Collapse>
          <MobileNav className="backdrop-blur" open={openNav}>
          {NavList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" color="white" size="sm" onClick={openDrawer}>
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" onClick={openoffcanvas}>
              <span>Sign in</span>
            </Button>
          </div>
        </MobileNav>
        </Navbar>
        {/* navigation bar end */}
        <React.Fragment>    
        {/* signup form  */}
     <Drawer open={open} onClose={closeDrawer}>
        <div className="flex items-center justify-between px-4 pb-2">
          <Typography variant="h5" color="blue-gray">
            Sign Up
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div className="mb-5 px-4">
          <Typography variant="small" color="gray" className="font-normal ">
            Write the imformation following.
          </Typography>
        </div>
        <form className="flex flex-col gap-3 p-4">
        <Typography variant="h6" color="blue-gray" className="-mb-3">
            First Name
          </Typography>
          <Input type="text" label="First Name" />
        <Typography variant="h6" color="blue-gray" className="-mb-3">
            Mobile No.
          </Typography>
          <Input type="number" label="Mobile Number" />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input type="email" label="Email" />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input label="Password" />
          <Button>Sign Up</Button>
          {/* <Typography color="gray" className="lg:mt-4 sm:mt-0 text-center font-normal">
          Already have an account?{" "}
          <label className="cursor-pointer font-medium text-gray-900" onClick={openoffcanvas}>
            Sign In
          </label>
        </Typography> */}
        </form>
      </Drawer>
       {/* signup form end */}
      {/* signin form  */}
     <Drawer open={openreg} onClose={closeoffcanvas}>
        <div className="flex items-center justify-between px-4 pb-2">
          <Typography variant="h5" color="blue-gray">
            Sign In
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeoffcanvas}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div className="mb-5 px-4">
          <Typography variant="small" color="gray" className="font-normal ">
            Write the imformation following.
          </Typography>
        </div>
        <form className="flex flex-col gap-3 p-4">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input type="email" label="Email" />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input label="Password" />
          <Button>Sign In</Button>
          {/* <Typography color="gray" className="lg:mt-4 sm:mt-0 text-center font-normal">
          Don't have account?{" "}
          <label className="cursor-pointer font-medium text-gray-900" onClick={openDrawer}>
            Sign Up
          </label>
        </Typography> */}
        </form>
      </Drawer>
      {/* signin form end */}
    </React.Fragment>
    </>
  )
}
