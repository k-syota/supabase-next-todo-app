import React, { useEffect, useState } from 'react'
import TodoList from './TodoList'
import { getAllTodos } from '@/utils/supabaseFunctions';

const TodoApp = () => {

    const [todos, setTodos] = useState<any>([]);

    useEffect(() => {
        const getTodos = async () => {
            const todos = await getAllTodos();
            setTodos(todos);
            console.log(todos)
        }
        getTodos();
    }, [])

    return (
        <section className='text-center mb-2 text-2xl font-medium'>
            <h3>Supabase Todo App</h3>
            <form>
                <input type="text" className='mr-4 shadow-lg p-1 outline-none' />
                <button className='shadow-md cursor-pointer px-1 py-1 border-2 bg-blue-200 rounded-2xl'>Add</button>
            </form>
            <TodoList />
        </section>
    )
}

export default TodoApp
