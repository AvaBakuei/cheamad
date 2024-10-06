import { Logo } from "./Logo";
import { Navbar } from "./Navbar";

export function Header() {
    return (
        <div className="flex justify-between items-center">
            <Logo />
            <Navbar />
        </div>
    )
}