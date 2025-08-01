import { useState } from 'react'
import { supabase } from '../supabaseClient'
import { v4 as uuidv4 } from 'uuid'
import styles from './TaskCreator.module.css'

export default function TaskCreator({
  onOptimisticAdd,
  onConfirmed,
  onFail,
}: {
  onOptimisticAdd: (task: any) => void
  onConfirmed: (tempId: string) => void
  onFail: (tempId: string) => void
}) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return alert('You must be logged in.')

    const tempId = uuidv4()
    const optimisticTask = {
      tempId,
      title,
      description,
      is_done: false,
      created_at: new Date().toISOString(),
      user_id: user.id,
      optimistic: true,
    }

    onOptimisticAdd(optimisticTask)
    setTitle('')
    setDescription('')
    setLoading(true)

    const { error } = await supabase.from('tasks').insert({
      title,
      description,
      user_id: user.id,
      is_done: false,
    })

    setLoading(false)

    if (error) {
      alert(`Upload failed: ${error.message}`)
      onFail(tempId)
    } else {
      onConfirmed(tempId)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className={styles.glowButton} type="submit" disabled={loading}>
        {loading ? 'Adding...' : 'Add Task'}
      </button>
    </form>
  )
}

