import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { logo } from "../assets";
import { NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";

const DrawOutlineButton = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="group relative px-4 py-2 font-medium text-[#FF6701] transition-colors duration-[400ms] !hover:text-[#ffffff]"
    >
      <span>{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-[#FF6701] transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-[#FF6701] transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-[#FF6701] transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-[#FF6701] transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};


export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "Testimonial",
    "Sign In",
    "Log out",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-black h-24 !gap-10">
      <NavbarContent className="">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
        <NavbarBrand className="text-[#FF6701] lg:justify-start justify-end ml-10 flex" >
          <Link href="/" className="">
            <img src={logo} alt="logo" width={95} height={95} className="bg-transparent scale-150" />
            <p className="font-bold lg:text-2xl hidden text-[#FF6701] ">Bharat's Fitness Den</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-10 ml-10" justify="center">
        <NavbarItem isActive>
          <div className="grid place-content-center p-4">
            <DrawOutlineButton>
              <Link href="#" aria-current="page" className="text-[#FF6701] hover:text-[#ffffff]">
                Home
              </Link>
            </DrawOutlineButton>
          </div>
        </NavbarItem>
        <NavbarItem isActive>
          <div className="grid place-content-center p-4">
            <DrawOutlineButton><Link href="#" className="text-[#FF6701] hover:text-[#ffffff]">Testimonial</Link></DrawOutlineButton>
          </div>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex text-[#FF6701]">
          <div className="grid place-content-center p-4">
            <DrawOutlineButton><Link href="#" className="text-[#FF6701] hover:text-[#ffffff]">Login</Link></DrawOutlineButton>
          </div>
        </NavbarItem>
        <NavbarItem>
          <div className="grid place-content-center p-4">
            <DrawOutlineButton><Link href="#" className="text-[#FF6701] hover:text-[#ffffff]">Sign Up</Link></DrawOutlineButton>
          </div>
        </NavbarItem>
        <NavbarMenu className="bg-transparent">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`} className="bg-transparent">
              <Link
                className="w-full text-[#FF6701] bg-transparent"
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </NavbarContent>
    </Navbar>
  );
}
