import React from 'react'
import styles from './GameBoard.scss'

const GameBoard = ({
  children,
}) => {
  return (
    <div className={styles.base}>{children}</div>
  )
}

export default GameBoard
