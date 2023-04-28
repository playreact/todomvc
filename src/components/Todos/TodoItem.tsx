import { X } from 'lucide-react'
import { memo, useState } from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { useSetAtom } from 'jotai'
import type { Todo } from './Todos.store'
import { todosAtom } from './Todos.store'

const TodoItem: React.FC<{ todo: Todo }> = ({ todo }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: todo.id })
  const style = { transform: CSS.Transform.toString(transform), transition }
  const setTodos = useSetAtom(todosAtom)
  const [isEditing, setIsEditing] = useState(false)
  const [editedTitle, setEditedTitle] = useState(todo.title)

  const removeTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  const toggleTodo = (id: string) => {
    setTodos(prev => prev.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

  const updateTodo = (id: string, title: string) => {
    if (title === '') {
      removeTodo(id)
      return
    }
    setTodos(prev => prev.map(todo => todo.id === id ? { ...todo, title } : todo))
    setIsEditing(false)
  }

  const handleBlur = () => {
    if (editedTitle === todo.title) {
      setIsEditing(false)
      return
    }
    updateTodo(todo.id, editedTitle.trim())
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      setEditedTitle(todo.title)
      setIsEditing(false)
    }

    if (e.key === 'Enter') {
      if (editedTitle === todo.title) {
        setIsEditing(false)
        return
      }
      updateTodo(todo.id, editedTitle.trim())
    }
  }

  if (isEditing) {
    return (
      <input
        type="text"
        className='border-base-300 bg-base-100 w-full gap-3 rounded border p-3 text-lg shadow-xl outline-none'
        value={editedTitle}
        onChange={e => setEditedTitle(e.target.value)}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        autoFocus
      />
    )
  }

  return (
    <li ref={setNodeRef} style={style} {...attributes} className='border-base-300 relative flex items-center gap-3 rounded border p-3 text-lg shadow [&_svg]:hover:visible'>
      <input type="checkbox" className='checkbox' checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
      <span
        {...listeners}
        onDoubleClick={() => setIsEditing(true)}
        className={`w-full ${todo.completed ? 'line-through opacity-50' : ''}`}
      >
        {todo.title}
      </span>
      <button className='invisible absolute right-3' onClick={() => removeTodo(todo.id)}>
        <X />
      </button>
    </li>
  )
}

export default memo(TodoItem)
