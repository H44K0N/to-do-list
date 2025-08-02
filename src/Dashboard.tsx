import { useState, useEffect } from 'react'
import TaskCreator from './TaskCreator'
import TaskList from './TaskList'
import styles from './Dashboard.module.css'
import { supabase } from '../supabaseClient'

export default function Dashboard() {
  const [tasks, setTasks] = useState<any[]>([])

  useEffect(() => {
    const loadTasks = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return

      const { data } = await supabase
        .from('tasks')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })

      if (data) setTasks(data)
    }

    loadTasks()
  }, [])

  const handleOptimisticAdd = (task: any) => {
    setTasks((prev: any[]) => [task, ...prev])
  }

  const handleConfirmed = async (tempId: string) => {
    const { data } = await supabase
      .from('tasks')
      .select('*')
      .eq('tempId', tempId)
      .single()

    if (data) {
      setTasks((prev: any[]) =>
        prev.map(t => (t.tempId === tempId ? data : t))
      )
    }
  }

  const handleFail = (tempId: string) => {
    setTasks((prev: any[]) => prev.filter(t => t.tempId !== tempId))
  }

  return (
    <div className={styles.dashboard}>
      <h1 className={styles.heading}>Your Tasks</h1>
      <TaskCreator
        onOptimisticAdd={handleOptimisticAdd}
        onConfirmed={handleConfirmed}
        onFail={handleFail}
      />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  )
}

