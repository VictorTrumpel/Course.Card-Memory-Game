import { Game, Types, AUTO } from 'phaser'
import { PreloadScene } from './scenes/PreloadScene'
import { GameScene } from './scenes/GameScene'

const config: Types.Core.GameConfig = {
  type: AUTO,
  width: 1280,
  height: 980,
  backgroundColor: '#6e6666',
  scene: [
    PreloadScene,
    GameScene
  ]
}

new Game(config)