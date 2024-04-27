"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle
} from "./ui/navigation-menu";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="bg-black p-5">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
          <div className="flex ml-10">
          <div className="flex justify-center items-center">
          <h1 className="text-white font-bold">CogniCraft</h1>
          </div>
          <Image width={50} height={50} src="/cognicraft.png" alt='brain'/>
          </div>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
                <h1>New</h1>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-black">
              <NavigationMenuLink className="bg-black">
                <div className="bg-black text-white h-96 w-96">
                    link
                </div>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item Two</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>
              <div className="bg-white h-96 w-96">
                    link
                </div>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavBar;
