import { CardList } from "@/components/Card/CardList";
import { Categories } from "@/components/Categories";
import { Hero } from "@/components/Hero";
import { categories } from "@/constants/categories";
import { poplulars } from "@/constants/populars";

export function Home() {
    return (
        <>
            <Hero />
            <Categories categories={categories} />
            <CardList data={poplulars} title="Popular Events" />
        </>
    )
}