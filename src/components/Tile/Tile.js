import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import styles from './Tile.scss'

const Tile = ({
  blank,
  handleClick,
  number,
}) => {
  const onClick = () => {
    handleClick(number)
  }

  return (
    <button
      className={cx(styles.base, { [styles.blank]: blank })}
      onClick={onClick}
    >
      {!!number && number}
    </button>
  )
}

Tile.propTypes = {
  blank: PropTypes.bool,
  handleClick: PropTypes.func,
  number: PropTypes.number,
}

export default Tile
