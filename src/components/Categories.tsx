import { CategoryType } from "./types/categoriesType";

export const Categories: React.FC<CategoryType> = ({ categories }) => {
    return (
        <div className="w-full flex items-center justify-center">
            {categories.map((category) => (
                <div className="categories flex flex-col items-center justify-center m-6 p-2 text-primary cursor-pointer" key={category.id}>
                    <div className="categories-icon flex items-center justify-center bg-tertiary">{category.icon}</div>
                    <span className="categories-title mt-2 font-semibold text-md">{category.id}</span>
                </div>
            ))}
        </div>
    )
}