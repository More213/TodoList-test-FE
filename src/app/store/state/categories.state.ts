import { Expose, plainToClass } from 'class-transformer';

export class Todo {
    _id?: null | string;
    text!: string;
    isCompleted!: Boolean;
    atUpdate?: string
}

export class TodoCheck {
    todoId!: string;
    categoryId!: string;
    isCompleted!: boolean;
    atUpdate?: string

}

export class Category{
    _id?: null | string;
    title?: null | string;
    atCreated?: null | string;
    todos!: Todo[]
}

export class Categories {
    @Expose() categories!: Category[];

    // @Expose()
    // getTitels() {
    //     return this.categories.map((title) => {

    //     })
    // }
}

export const initialCategoriesState: Categories = {
    categories: [],
}

// export const initialCatState = plainToClass(Categories, initialCategoriesState)