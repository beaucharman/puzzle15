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



  handleTileClick = (tileNumber) => {
    // 1. check that the target has a `number` not `0`
    if (tileNumber < 1) {
      // 1.1 if false, do nothing
      return false
    }

    console.log('Tile: ', tileNumber)


    // 2 if true, check for a blank tile next to the
    //   clicked target tile

      //  2.1 check that the position right of the
      //      target or left of it has the blank tile

      // 2.2 check that the row above or below
      //     + pos above has the blank tile

      // 2.3 if not, do nothing


    // 3. if the target does have an adjacent blank tile,
    //    switch the tiles and update the state
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

  render() {
    return (
      <GameBoard>
        {this.renderTiles()}
      </GameBoard>
    )
  }
}

export default App
