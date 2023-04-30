import Toolbar from '../Toolbar'
import TodoInput from './TodoInput'
import TodoFilter from './TodoFilter'
import TodoList from './TodoList'
import 'lxgw-wenkai-screen-webfont/style.css'

const App: React.FC = () => {
  return (
    <div className='flex items-start justify-center p-20'>
      <div className="flex w-[55ch] flex-col gap-6 font-['LXGW_WenKai_Screen']">
        <h1 className='mb-3 text-6xl font-bold'>Todo MVC</h1>
        <TodoFilter />
        <TodoInput />
        <TodoList />
      </div>

      <div className="fixed right-3 top-3">
        <Toolbar />
      </div>
    </div>
  )
}

export default App
