import type {Food} from "../types/Food";

const foods: Food[] = [
    {
        id: 1,
        name: 'Sandwich',
        ingredients: ['Bread', 'Cheese', 'Sausage'],
        description: 'Yummy!'
    },
    {
        id: 2,
        name: 'Pizza',
        ingredients: ['Cheese', 'Tomato'],
        description: 'Yummy too!'
    }
]

export const getAllIds = (): Promise<number[]> => Promise.resolve(foods.map(food => food.id));
export const getById = (id: number) => Promise.resolve(foods.filter(food => food.id === id)?.[0]);