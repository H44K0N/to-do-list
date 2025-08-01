import { useState } from 'react'
import { supabase } from '../supabaseClient'
import { useNavigate } from 'react-router-dom'
import styles from './LoginForm.module.css'

export default function LoginForm({ onSwitch }: { onSwitch: () => void }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErrorMsg('')

    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setErrorMsg(error.message)
    } else {
      navigate('/dashboard')
    }

    setLoading(false)
  }

  return (
    <form onSubmit={handleLogin} className={styles.form}>
      <h2 className={styles.heading}>Login</h2>

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
        {loading ? 'Logging in...' : 'Login'}
      </button>

      {errorMsg && <p className={styles.message}>{errorMsg}</p>}

      <button type="button" className={styles.switchButton} onClick={onSwitch}>
        Need an account? Register
      </button>
    </form>
  )
}

