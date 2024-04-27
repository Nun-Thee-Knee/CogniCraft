"use client";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between bg-black px-10 py-5">
      <div id="logo" className="flex-grow">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <div className="flex">
                <div className="flex items-center justify-center">
                  <h1 className="text-xl font-bold text-white">CogniCraft</h1>
                </div>
              </div>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div id="auth" className="flex justify-end">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <div className="flex">
                <div className="flex items-center justify-center gap-5">
                  <Popover>
                    <PopoverTrigger>
                      <Avatar>
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </PopoverTrigger>
                    <PopoverContent>
                      <div
                        id="user"
                        className="flex flex-col items-start justify-center gap-2 p-5"
                      >
                        <h1>Username: </h1>
                        <h1>Email: </h1>
                        <center>
                          <Button>Logout</Button>
                        </center>
                      </div>
                    </PopoverContent>
                  </Popover>

                  <Button variant="default">Signin</Button>
                  <Button variant="default">Signup</Button>
                </div>
              </div>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default NavBar;
