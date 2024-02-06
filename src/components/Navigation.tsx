import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import puppyPhoto from "../images/puppies/nav.jpeg";

export function Navigation() {
  return (
    <NavigationMenu className="sm:pr-10">
      <NavigationMenuList className="grid grid-cols-1">
        <div className="grid grid-cols-1 gap-4 sm:flex">
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/"
              className={navigationMenuTriggerStyle()}
            >
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Dogs</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[300px] grid-cols-1 gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-accent p-6 no-underline outline-none focus:shadow-md">
                      <img
                        src={puppyPhoto.src}
                        className="rounded-md border-2 border-background drop-shadow-sm"
                        alt="Navigation menu puppy photo"
                      />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Puppies
                      </div>
                      <p className="text-sm leading-tight text-primary">
                        Information about past, present and futures litters as
                        well as pricing.
                      </p>
                      <Button className="mt-5" variant="secondary">
                        <a href="/puppies">Learn More</a>
                      </Button>
                    </div>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/ourdogs" title="Our Adult Dogs">
                  We currently have 4 beautiful dogs. Check them out!
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/photos"
              className={navigationMenuTriggerStyle()}
            >
              Photos
            </NavigationMenuLink>
          </NavigationMenuItem>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-primary">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
