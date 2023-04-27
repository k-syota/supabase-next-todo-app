import React from 'react'

const TodoList = () => {
    return (
        <div>
            <ul className='mx-auto'>
                <div className='flex bg-green-200 rounded-md my-2 p-2 justify-between'>
                    <li className='font-medium'>✅　買い物</li>
                    <span className='cursor-pointer'>×</span>
                </div>
                <div className='flex bg-green-200 rounded-md my-2 p-2 justify-between'>
                    <li className='font-medium'>✅　掃除</li>
                    <span className='cursor-pointer'>×</span>
                </div>
                <div className='flex bg-green-200 rounded-md my-2 p-2 justify-between'>
                    <li className='font-medium'>✅　ご飯準備</li>
                    <span className='cursor-pointer'>×</span>
                </div>
            </ul>
        </div>
    )
}

export default TodoList
