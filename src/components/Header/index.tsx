import { Logo } from "./Logo";
import { Navbar } from "./Navbar";
import { SearchBar } from "./Searchbar";

export function Header() {
    return (
        <div className="flex justify-between items-center">
            <Logo />
            <SearchBar />
            <Navbar />
        </div>
    )
}