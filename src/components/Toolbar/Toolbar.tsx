import React, { memo } from 'react'
import { Github } from 'lucide-react'
import ThemeChange from './ThemeChange'

const Toolbar: React.FC = () => {
  return (
    <>
      <ThemeChange />
      <a href='https://github.com/playreact/todomvc' className='btn-ghost btn-square btn'>
        <Github />
      </a>
    </>
  )
}

export default memo(Toolbar)
