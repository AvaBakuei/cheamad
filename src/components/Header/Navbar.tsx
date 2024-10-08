import { NavLink } from "react-router-dom";
import { useState } from "react";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import { navItems } from "@/constants/navItems";
import "../../index.css";

export function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
    return (
        <NavigationMenu className="items-start">
            <section className="mobile-menu flex md:hidden">
                <div
                    className="space-y-2"
                    onClick={() => setIsNavOpen((prev) => !prev)}
                >
                    <Menu />
                </div>

                <div className={`${isNavOpen ? "showMenuNav" : "hideMenuNav"}`}>
                    <div
                        className="absolute top-0 right-0"
                        onClick={() => setIsNavOpen(false)}
                    >
                        <X />
                    </div>
                    <ul className="flex flex-col items-center justify-between min-h-[250px]">
                        {navItems.map((nav, i) => (
                            <NavLink to={nav.path} key={i} className="text-primary text-[16px]">
                                {nav.name}
                            </NavLink>
                        ))}
                    </ul>
                </div>
            </section>

            <NavigationMenuItem className="desktop-menu hidden space-x-8 md:flex flex items-center">
                {navItems.map((nav, i) => (
                    <NavLink to={nav.path} key={i}>
                        <NavigationMenuLink
                            className={`${navigationMenuTriggerStyle()} font-semibold text-primary text-[16px]`}
                        >
                            {nav.name}
                        </NavigationMenuLink>
                    </NavLink>
                ))}
            </NavigationMenuItem>
        </NavigationMenu>
    );
}
