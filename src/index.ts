import { Game, Types, AUTO } from 'phaser'
import { PreloadScene } from './scenes/PreloadScene'
import { GameScene } from './scenes/GameScene'
import gameConfig from './gameConfig'

const config: Types.Core.GameConfig = {
  type: AUTO,
  width: gameConfig.screenWidth,
  height: gameConfig.screenHeight,
  backgroundColor: gameConfig.backgroundColor,
  scene: [
    PreloadScene,
    GameScene
  ]
}

new Game(config)