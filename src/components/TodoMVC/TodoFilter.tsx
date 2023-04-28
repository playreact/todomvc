import { useAtom } from 'jotai'
import React, { memo } from 'react'
import { filterAtom } from './Todo.store'

const TodoFilter: React.FC = () => {
  const [filter, setFilter] = useAtom(filterAtom)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value)
  }

  return (
    <div className='flex gap-5'>
      <div className='flex cursor-pointer items-center gap-2 text-lg'>
        <input type="radio" id="r1" name="r" className="radio" value='all' checked={filter === 'all'} onChange={handleChange} />
        <label htmlFor="r1">All</label>
      </div>
      <div className='flex cursor-pointer items-center gap-2 text-lg'>
        <input type="radio" id="r2" name="r" className="radio" value='active' checked={filter === 'active'} onChange={handleChange} />
        <label htmlFor="r2">Active</label>
      </div>
      <div className='flex cursor-pointer items-center gap-2 text-lg'>
        <input type="radio" id="r3" name="r" className="radio" value='completed' checked={filter === 'completed'} onChange={handleChange} />
        <label htmlFor="r3">Completed</label>
      </div>
    </div>
  )
}

export default memo(TodoFilter)
