import React, { Component } from 'react'
import uuidv1 from 'uuid/v1'
import GameBoard from './components/GameBoard'
import Tile from './components/Tile'

const initialState = () => ({
  data: [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
  ]
})

class App extends Component {
  state = initialState()

  swapItems = (arr, rowA, indexA, rowB, indexB) => {
    const matrix = arr.concat([]) // so not to mutate the array refernce
    const temp = matrix[rowA][indexA]
    matrix[rowA][indexA] = matrix[rowB][indexB]
    matrix[rowB][indexB] = temp
    return matrix
  }

  findCoords = (matrix, target) => {
    let result
    let row = 0
    matrix.forEach((list) => {
      if (list.indexOf(target) > -1) {
        result = { x: row, y: list.indexOf(target) }
      }

      row++
    })
    return result
  }

  checkCanMove = (targetCoords, blankCoords) => {
    // by row
    if (targetCoords.x === blankCoords.x) {
      if (targetCoords.y === blankCoords.y - 1 || targetCoords.y === blankCoords.y + 1) {
        return true
      }
    // by column
    } else if (targetCoords.y === blankCoords.y) {
      if (targetCoords.x === blankCoords.x - 1 || targetCoords.x === blankCoords.x + 1) {
        return true
      }
    } else {
      return false
    }
  }

  handleTileClick = (tileNumber) => {
    // 1. check that the target has a `number` not `0`
    if (tileNumber < 1) {
      // 1.1. if false, do nothing
      return false
    }

    const { data } = this.state

    // 1.2. find the coords of the clicked element
    const targetCoords = this.findCoords(data, tileNumber)

    // 1.3. find the coords of the blank element
    const blankCoords = this.findCoords(data, 0)

    // 2. if true, check for a blank tile next to the
    //    clicked target tile
    //    2.1. check that the position right of the
    //         target or left of it has the blank tile
    //    2.2. check that the row above or below
    //         + the same position has the blank tile
    const canMove = this.checkCanMove(targetCoords, blankCoords)

    // 2.3. if not, do nothing
    if (!canMove) {
      return false
    }

    // 3. if the target does have an adjacent blank tile,
    //    switch the tiles and update the state
    this.setState(() => ({
      data: this.swapItems(data, targetCoords.x, targetCoords.y, blankCoords.x, blankCoords.y),
    }))
  }

  renderTileFromRow = (row) => row.map(
    (item) => (
      <Tile
        blank={item === 0}
        handleClick={this.handleTileClick}
        key={uuidv1()}
        number={item}
      />
    )
  )

  renderTiles = () => this.state.data.map(this.renderTileFromRow)

  // @TODO ramdomise tiles in state on initial render

  render() {
    return (
      <GameBoard>
        {this.renderTiles()}
      </GameBoard>
    )
  }
}

export default App
