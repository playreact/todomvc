import { Check, Palette } from 'lucide-react'
import React, { memo, useEffect } from 'react'
import { themeChange } from 'theme-change'
import { themes } from './ThemeChange.constants'

const ThemeChange: React.FC = () => {
  useEffect(() => {
    themeChange(false)
  }, [])

  return (
    <div className="dropdown-bottom dropdown-end dropdown">
      <label tabIndex={0} className="btn-ghost btn">
        <Palette />
      </label>
      <div tabIndex={0} className="dropdown-content menu mt-2 h-64 w-52 overflow-y-auto rounded-md bg-base-200 p-2 shadow">
        <div className='grid grid-cols-1 gap-3 p-2'>
          {
            themes.map(theme => (
              <button
                key={theme.id}
                data-theme={theme.id}
                data-set-theme={theme.id}
                data-act-class='[&_svg]:visible'
                className="flex w-full cursor-pointer items-center gap-2 rounded bg-base-100 px-3 py-2 font-serif"
              >
                <Check className='invisible' />
                {theme.id}
              </button>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default memo(ThemeChange)
