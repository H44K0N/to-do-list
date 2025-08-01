import { useState } from 'react'
import { supabase } from '../supabaseClient'
import styles from './RegisterForm.module.css'

export default function RegisterForm({ onSwitch }: { onSwitch: () => void }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    const { error } = await supabase.auth.signUp({ email, password })

    if (error) {
      setMessage(error.message)
    } else {
      setMessage('Account created! Check your email to confirm.')
    }

    setLoading(false)
  }

  return (
    <form onSubmit={handleRegister} className={styles.form}>
      <h2 className={styles.heading}>Register</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        required
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className={styles.glowButton} type="submit" disabled={loading}>
        {loading ? 'Registering...' : 'Register'}
      </button>

      {message && <p className={styles.message}>{message}</p>}

      <button type="button" className={styles.switchButton} onClick={onSwitch}>
        Already have an account? Login
      </button>
    </form>
  )
}

