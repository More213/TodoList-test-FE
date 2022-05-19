export class Todo {
    _id?: null | string;
    text!: string;
    isCompleted!: Boolean;
}

export class Category{
    _id?: null | string;
    title?: null | string;
    todos!: Todo[]
}

export class Categories {
    categories!: Category[];
}

export const initialCategoriesState: Categories = {
    categories: [],
}