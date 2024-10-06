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
                {navItems.map((nav) => (
                    <NavLink to={nav.path}>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            {nav.name}
                        </NavigationMenuLink>
                    </NavLink>
                ))}
            </NavigationMenuItem>
        </NavigationMenu>
    );
}
