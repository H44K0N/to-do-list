import { useState, useEffect } from 'react'
import styles from './AuthCard.module.css'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

const title = 'Hypertask'

export default function AuthCard() {
  const [isFlipped, setIsFlipped] = useState(false)
  const [animateWave, setAnimateWave] = useState(false)

  useEffect(() => {
    const trigger = () => {
      setAnimateWave(true)
      setTimeout(() => setAnimateWave(false), 1000)
    }

    trigger()
    const interval = setInterval(trigger, 8000)

    return () => clearInterval(interval)
  }, [])

  const letterVariants: Variants = {
    initial: {
      scale: 1,
      textShadow: '0 0 0px #00c6ff',
    },
    animate: {
      scale: [1, 1.1, 1],
      textShadow: [
        '0 0 0px #00c6ff',
        '0 0 6px #00c6ff',
        '0 0 0px #00c6ff',
      ],
      transition: {
        duration: 0.4,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  }

  return (
    <div className={styles.wrapper}>
      <motion.h1 className={styles.title}>
        {title.split('').map((char, i) => (
          <motion.span
            key={i}
            variants={letterVariants}
            initial="initial"
            animate={animateWave ? 'animate' : 'initial'}
            transition={{ delay: i * 0.02 }}
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

