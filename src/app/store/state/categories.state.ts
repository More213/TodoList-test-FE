export interface ITodoState {
    _id?: null | string,
    text: string,
    isCompleted: Boolean
}


export interface ICategoryState {
    _id: null | string,
    title: null | string,
    todos:  ITodoState[]
};

export interface ICategoriesState {
    categories: ICategoryState[],
    status?: string | null
};

export const initialCategoriesState: ICategoriesState = {
    categories: [],
    status: null
}