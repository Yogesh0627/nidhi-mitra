"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export function Navbar() {
  const navLinks = [
    { label: "Home", href: "/" },
    // { label: "About", href: "/about" },
    // { label: "Work", href: "/work" },
    // { label: "My Recommendations", href: "/my-recommendations" },
    // { label: "Blogs", href: "/blogs" },
  ];

  return (
    <nav className="w-full px-6 py-5 flex justify-between items-center">
      <h1 className="text-white text-xl font-bold">Nidhi Mitra</h1>

      {/* Desktop Nav */}
      <div className="hidden md:flex">
        <NavigationMenu className="w-full max-w-full justify-end">
          <NavigationMenuList className="gap-10 max-w-full justify-end">
            {navLinks.map(({ label, href }) => (
              <NavigationMenuItem key={href}>
                <NavigationMenuLink
                  asChild
                  className="text-lg font-medium text-white"
                >
                  <Link href={href}>{label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Nav - Hamburger */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu className="text-white w-6 h-6" />
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#0f1115] text-white">
            <SheetTitle asChild>
              <VisuallyHidden>Navigation Menu</VisuallyHidden>
            </SheetTitle>
            <div className="flex flex-col space-y-6 mt-10 pl-5">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-lg font-medium hover:text-green-400 transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
