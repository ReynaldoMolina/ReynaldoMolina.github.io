import { useIsMobile } from "@/hooks/use-mobile";
import { headerLinks, contacts } from "../data/data";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

export function Header() {
  const isMobile = useIsMobile();

  return (
    <header className="flex w-full items-center sticky top-0 bg-background z-10">
      <div className="inline-flex w-full max-w-7xl px-7 py-3 mx-auto">
        <NavigationMenu>
          <NavigationMenuList>
            {/* mobile */}
            <NavigationMenuItem className="md:hidden">
              <NavigationMenuTrigger className="font-semibold border">
                Menu
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <ListItem href="/#aboutme">About me</ListItem>
                  <ListItem href="/#projects">Projects</ListItem>
                  <ListItem href="/#experience">Experience</ListItem>
                  <ListItem href="/#skills">Skills</ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {/* desktop */}
            {headerLinks.map(({ link, name }) => (
              <NavigationMenuItem key={name} className="hidden md:block">
                <NavigationMenuLink asChild className="font-semibold">
                  <a href={link}>{name}</a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="inline-flex items-center gap-3 md:gap-5 ml-auto">
          {contacts.map(({ name, link, Icon }) => (
            <a key={name} href={link} target="_blank" rel="noopener noreferrer">
              <Icon className="size-8 hover:scale-110 cursor-pointer transition" />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

function ListItem({
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <a href={href} className="text-sm leading-none font-medium">
          {children}
        </a>
      </NavigationMenuLink>
    </li>
  );
}
