import { useState, useEffect } from 'react'
import styles from './AuthCard.module.css'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import { motion, Variants } from 'framer-motion'

const title = 'Hypertask'

const letterVariants: Variants = {
  initial: {
    scale: 1,
    textShadow: '0 0 0px #00c6ff',
  },
  wave: {
    scale: [1, 1.1, 1],
    textShadow: [
      '0 0 0px #00c6ff',
      '0 0 6px #00c6ff',
      '0 0 0px #00c6ff',
    ],
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
}

export default function AuthCard() {
  const [isFlipped, setIsFlipped] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  useEffect(() => {
    const trigger = () => {
      setActiveIndex(0)
    }

    trigger() // initial wave
    const interval = setInterval(trigger, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.wrapper}>
      <motion.h1 className={styles.title}>
        {title.split('').map((char, i) => (
          <motion.span
            key={i}
            variants={letterVariants}
            initial="initial"
            animate={activeIndex === i ? 'wave' : 'initial'}
            onAnimationComplete={() => {
              if (activeIndex === i) setActiveIndex(i + 1 < title.length ? i + 1 : null)
            }}
            className={styles.letter}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
      <div className={styles.scene}>
        <div className={`${styles.card} ${isFlipped ? styles.flipped : ''}`}>
          <div className={styles.front}>
            <LoginForm onSwitch={() => setIsFlipped(true)} />
          </div>
          <div className={styles.back}>
            <RegisterForm onSwitch={() => setIsFlipped(false)} />
          </div>
        </div>
      </div>
    </div>
  )
}
