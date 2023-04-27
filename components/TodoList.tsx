import { Todo } from '@/utils/interface';
import { deleteTodo, getAllTodos } from '@/utils/supabaseFunctions';
import React from 'react'

type Props = {
    todos: Todo[]
    setTodos: React.Dispatch<any>
}

const TodoList = (props: Props) => {

    const { todos, setTodos } = props;

    const handleDelete = async (id: number) => {
        await deleteTodo(id);
        const todos = await getAllTodos();
        setTodos(todos);
    }

    return (
        <div>
            <ul className='mx-auto'>
                {todos.map((todo) => {
                    return (
                        <div key={todo.id} className='flex bg-green-200 rounded-md my-2 p-2 justify-between'>
                            <li className='font-medium'>✅　{todo.title}</li>
                            <span className='cursor-pointer' onClick={() => handleDelete(todo.id)}>×</span>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default TodoList
