import { Logo } from "./Logo";
import { Navbar } from "./Navbar";
import { SearchBar } from "./SearchBar";

export function Header() {
    return (
        <div className="flex justify-between items-center mb-6">
            <Logo />
            <SearchBar />
            <Navbar />
        </div>
    );
}
