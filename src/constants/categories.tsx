import { Drum, Dumbbell, Drama, Utensils, Gamepad2 } from 'lucide-react';
import { CategoryInterface } from "@/components/types/categoriesType";
export const categories: CategoryInterface[] = [
    {
        id: "Music",
        icon: <Drum />
    },
    {
        id: "Sport",
        icon: <Dumbbell />
    },
    {
        id: "Visual Arts",
        icon: <Drama />
    },
    {
        id: "Hobbies",
        icon: <Gamepad2 />
    },
    {
        id: "Food & Drink",
        icon: <Utensils />
    },
]