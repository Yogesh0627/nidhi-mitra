"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Home, User, Briefcase, X, BookOpenText } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export function Navbar() {
  const pathname = usePathname();
  const navLinks = [
    { label: "Home", href: "/", icon: <Home className="w-4 h-4" /> },
    { label: "About", href: "/about", icon: <User className="w-4 h-4" /> },
    { label: "Work", href: "/work", icon: <Briefcase className="w-4 h-4" /> },
    { label: "My Recommendations", href: "/my-recommendations", icon: <BookOpenText  className="w-4 h-4" /> },
  ];

  return (
    <nav className="w-full px-4 sm:px-6 lg:px-8 py-5 flex justify-between items-center border-b border-[#1f2a38]/50 bg-[#0f1115]/80 backdrop-blur-lg sticky top-0 z-50">
      {/* Logo/Name */}
      <Link href="/" className="group">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent group-hover:from-green-500 group-hover:to-blue-600 transition-all">
          Nidhi Mitra
          <span className="text-xs block font-normal text-gray-400 group-hover:text-gray-300">Elementary Educator</span>
        </h1>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex">
        <NavigationMenu className="w-full max-w-full">
          <NavigationMenuList className="gap-2">
            {navLinks.map(({ label, href, icon }) => (
              <NavigationMenuItem key={href}>
                <NavigationMenuLink asChild>
                  <Link
                    href={href}
                    className={cn(
                      "px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-colors",
                      pathname === href
                        ? "bg-[#1f2a38]/60 text-green-400 backdrop-blur-sm"
                        : "text-gray-300 hover:text-white hover:bg-[#1a1f2b]/60 hover:backdrop-blur-sm"
                    )}
                  >
                    {icon}
                    {label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="backdrop-blur-sm">
              <Menu className="w-5 h-5 text-gray-300" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent 
            side="right" 
            className="bg-[#0f1115]/50 backdrop-blur-xl border-l border-[#1f2a38]/50 sm:w-64"
          >
            <SheetHeader className="text-left flex flex-row items-center justify-between backdrop-blur-sm">
              {/* Visually hidden title for accessibility */}
              <SheetTitle asChild>
                <VisuallyHidden>Navigation Menu</VisuallyHidden>
              </SheetTitle>
              
              {/* Your name/logo */}
              <Link href="/" className="group">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                  Nidhi Mitra
                </h1>
              </Link>
              
              {/* Close button (X icon) */}
              <SheetClose className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
                <X className="h-5 w-5 text-gray-300" />
                <span className="sr-only">Close</span>
              </SheetClose>
            </SheetHeader>
            
            <div className="flex flex-col space-y-2 mt-10">
              {navLinks.map(({ label, href, icon }) => (
                <SheetClose asChild key={href}>
                  <Link
                    href={href}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-colors backdrop-blur-sm",
                      pathname === href
                        ? "bg-[#1f2a38]/60 text-green-400"
                        : "text-gray-300 hover:text-white hover:bg-[#1a1f2b]/60"
                    )}
                  >
                    {icon}
                    {label}
                  </Link>
                </SheetClose>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}