import styles from './TaskItem.module.css'
import { supabase } from '../supabaseClient'
import { motion } from 'framer-motion'

interface Task {
  id?: string
  tempId?: string
  title: string
  description?: string
  is_done: boolean
  optimistic?: boolean
}

interface Props {
  task: Task
  onUpdated: (updatedTask: Task) => void
  onDeleted: (id: string) => void
  index: number
}

export default function TaskItem({ task, onUpdated, onDeleted, index }: Props) {
  const taskId = task.id || task.tempId

  const toggleDone = async () => {
    if (!task.id) return

    const { data, error } = await supabase
      .from('tasks')
      .update({ is_done: !task.is_done })
      .eq('id', task.id)
      .select()
      .single()

    if (error || !data) {
      alert('Failed to update task status')
      return
    }

    onUpdated(data)
  }

  const deleteTask = async () => {
    if (!task.id) return

    const { error } = await supabase
      .from('tasks')
      .delete()
      .eq('id', task.id)

    if (error) {
      alert('Failed to delete task')
      return
    }

    onDeleted(task.id)
  }

  return (
    <motion.div
      className={`${styles.task} ${task.is_done ? styles.done : ''}`}
      initial={{ opacity: 0, x: -40, scale: 0.98 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ delay: index * 0.05, duration: 0.4, ease: 'easeOut' }}
    >
      <div className={styles.text}>
        <h3>
          {task.title}
          {task.is_done && <span className={styles.strikeThrough} />}
        </h3>
        {task.description && <p>{task.description}</p>}
      </div>
      <div className={styles.actions}>
        <button onClick={toggleDone}>{task.is_done ? 'Undo' : 'Done'}</button>
        <button onClick={deleteTask}>Delete</button>
      </div>
    </motion.div>
  )
}

