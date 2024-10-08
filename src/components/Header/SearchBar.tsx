import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';

export function SearchBar() {
    return (
        <div className="flex w-full max-w-lg p-1 rounded-full items-center space-x-2 bg-tertiary">
            <Input type="text" placeholder="Search Events" className="flex rounded-none	border-0 border-r border-thirdly shadow-none focus-visible:ring-0" />
            <Input type="text" placeholder="Choose a location" className="flex border-0 shadow-none focus-visible:ring-0" />
            <Button type="submit" variant="secondary" className="flex p-1.5 w-8 h-8 bg-secondary rounded-full border-0 shadow-none focus:outline-none"><Search className="text-white" /></Button>
        </div>
    )
}