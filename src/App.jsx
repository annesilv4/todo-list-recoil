import './global.css'
import './App.css'
import { TaskList } from './components/taskList/taskList';
import { TaskForm } from './components/taskForm/taskForm';
import { FilterTasks } from './components/filter/filter';

function App() {

  return (
    <div className="app-container">
      <main className="app-main">
        <header className="app-header">
          <h1>Todo-List Recoil</h1>
          <p className="app-subtitle">Gerencie suas tarefas com eficiência</p>
        </header>

        <section className="form-section">
          <TaskForm />
        </section>

        <section className="filter-section">
          <FilterTasks />
        </section>

        <section className="list-section">
          <TaskList />
        </section>
      </main>
    </div>
  )
}

export default App
