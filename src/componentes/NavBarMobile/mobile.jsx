import React, { useState } from "react";
import {
  Navbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";

export default function NavMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Inicio", "Proyectos", "Contactos"];

  const handleItemClick = (itemId) => {
    document.getElementById(itemId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-transparent-black">
      <h1 className="text-white text-2xl tracking-tight">DAMIAN DIAZ</h1>
      <img
        src="https://res.cloudinary.com/dv4gefesd/image/upload/v1712589079/logo-damian-porfolio-Photoroom.png-Photoroom_u1oztx.png"
        className="w-[10vw] pb-2"
      />
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen === false ? "Close menu" : "Open menu"}
          className="sm:hidden text-white ml-[82%]"
        />
      </NavbarContent>
      <NavbarMenu className="bg-transparent-black">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="text-white w-full"
              size="lg"
              onClick={() => handleItemClick(item)}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
