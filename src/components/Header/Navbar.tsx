import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { NavLink } from "react-router-dom";
import { navItems } from "@/constants/navItems";

export function Navbar() {
    return (
        <NavigationMenu>
            <NavigationMenuItem className="flex items-center">
                {navItems.map((nav, i) => (
                    <NavLink to={nav.path} key={i}>
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} font-semibold text-sky-800 text-base`}>
                            {nav.name}
                        </NavigationMenuLink>
                    </NavLink>
                ))}
            </NavigationMenuItem>
        </NavigationMenu>
    );
}
