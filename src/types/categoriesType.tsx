import { ReactElement } from "react"

export interface CategoryInterface {
    id: string,
    icon: ReactElement
}

export interface CategoryType {
    categories: CategoryInterface[]
}