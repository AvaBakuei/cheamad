import { Categories } from "@/components/Categories";
import { Hero } from "@/components/Hero";
import { categories } from "@/constants/categories";

export function Home() {
    return (
        <>
            <Hero />
            <Categories categories={categories} />
        </>
    )
}