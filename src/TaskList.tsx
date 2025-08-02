import TaskItem from './TaskItem'
import styles from './TaskList.module.css'

interface Task {
  id?: string
  tempId?: string
  title: string
  description?: string
  is_done: boolean
  optimistic?: boolean
}

export default function TaskList({
  tasks,
  setTasks,
}: {
  tasks: Task[]
  setTasks: (tasks: Task[]) => void
}) {
  const handleUpdate = (updatedTask: Task) => {
    setTasks((prev: Task[]) =>
      prev.map((task: Task) =>
        task.id === updatedTask.id || task.tempId === updatedTask.tempId
          ? updatedTask
          : task
      )
    )
  }

  const handleDelete = (id: string) => {
    setTasks((prev: Task[]) =>
      prev.filter((task: Task) => task.id !== id && task.tempId !== id)
    )
  }

  return (
    <div className={styles.list}>
      {tasks.map((task, i) => (
        <TaskItem
          key={task.id || task.tempId}
          task={task}
          index={i}
          onUpdated={handleUpdate}
          onDeleted={handleDelete}
        />
      ))}
    </div>
  )
}

