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
import Link from "next/link";

type profileDetails = {
  userName?:string|null|undefined,
  email?:string|null|undefined,
  image?:string|null|undefined
}

const NavBar = ({userName, email, image}:profileDetails) => {
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
                    <PopoverTrigger className={`${userName?"":"hidden"}`}>
                      <Avatar>
                        <AvatarImage
                          src={image as string}
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
                        <h1><span className="capitalize font-bold">Username:</span> {userName}</h1>
                        <h1><span className="capitalize font-bold">Email:</span> {email}</h1>
                      </div>
                      <center>
                        <Link href="/api/auth/signout">
                        <Button className="mb-3">Logout</Button>
                        </Link>
                        </center>
                    </PopoverContent>
                  </Popover>

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
