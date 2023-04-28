import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { nanoid } from 'nanoid'

export interface Todo {
  id: string
  title: string
  completed: boolean
}

export const todosAtom = atomWithStorage<Todo[]>('todos', [
  { id: nanoid(), title: '👆 按住可拖动', completed: false },
  { id: nanoid(), title: '📑 双击可编辑', completed: false },
])

export const filterAtom = atomWithStorage('filter', 'all')

export const filteredTodosAtom = atom((get) => {
  const filter = get(filterAtom)
  const todos = get(todosAtom)
  if (filter === 'all')
    return todos
  else if (filter === 'active')
    return todos.filter(todo => !todo.completed)
  else return todos.filter(todo => todo.completed)
})
