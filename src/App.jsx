import './global.css'
import { TaskList } from './components/taskList';
import { TaskForm } from './components/taskForm';
import { FilterTasks } from './components/filter';

function App() {

  return (
    <>
      <h1>Todo-List Recoil</h1>
      <TaskForm />
      <FilterTasks />
      <TaskList />
    </>
  )
}

export default App
