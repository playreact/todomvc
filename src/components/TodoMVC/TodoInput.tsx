import { useSetAtom } from 'jotai'
import type { FormEvent } from 'react'
import React, { memo, useState } from 'react'
import { nanoid } from 'nanoid'
import { todosAtom } from './Todo.store'

const TodoInput: React.FC = () => {
  const [title, setTitle] = useState('')
  const setTodos = useSetAtom(todosAtom)

  const addTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (title.trim() === '')
      return
    setTodos(prev => ([...prev, { id: nanoid(), title: title.trim(), completed: false }]))
    setTitle('')
  }

  return (
    <form onSubmit={addTodo}>
      <input
        className='bg-base-100 border-base-300 w-full rounded border p-5 text-lg shadow outline-none'
        type='text'
        placeholder='Type here ...'
        maxLength={50}
        autoFocus
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
    </form>
  )
}

export default memo(TodoInput)
