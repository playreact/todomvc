import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useAtomValue, useSetAtom } from 'jotai'
import type { DragEndEvent } from '@dnd-kit/core'
import { DndContext, KeyboardSensor, MouseSensor, TouchSensor, closestCenter, useSensor, useSensors } from '@dnd-kit/core'
import { SortableContext, arrayMove, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { filteredTodosAtom, todosAtom } from './Todos.store'
import TodoItem from './TodoItem'

const TodoList: React.FC = () => {
  const todos = useAtomValue(filteredTodosAtom)
  const setTodos = useSetAtom(todosAtom)
  const [parent] = useAutoAnimate()

  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { delay: 120, tolerance: 5 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 250, tolerance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  )

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (!over)
      return
    if (active.id !== over.id) {
      setTodos((todos) => {
        const oldIndex = todos.findIndex(todo => todo.id === active.id)
        const newIndex = todos.findIndex(todo => todo.id === over.id)
        return arrayMove(todos, oldIndex, newIndex)
      })
    }
  }

  return (
    <ul ref={parent} className='flex w-full select-none flex-col gap-3'>
      <DndContext onDragEnd={handleDragEnd} sensors={sensors} collisionDetection={closestCenter} >
        <SortableContext items={todos} strategy={verticalListSortingStrategy} >
          {
            todos.map(todo => (
              <TodoItem key={todo.id} todo={todo} />
            ))
          }
        </SortableContext>
      </DndContext>
    </ul>
  )
}

export default TodoList
