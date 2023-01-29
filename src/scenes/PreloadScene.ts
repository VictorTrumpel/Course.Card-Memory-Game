import { Scene } from 'phaser'

import card from '../assets/card/card.png'
import card1 from '../assets/card/card1.png'
import card2 from '../assets/card/card2.png'
import card3 from '../assets/card/card3.png'
import card4 from '../assets/card/card4.png'
import card5 from '../assets/card/card5.png'

export class PreloadScene extends Scene {
  constructor() {
    super('PreloadScene')
  }

  preload() {
    this.load.image('card', card)
    this.load.image('card1', card1)
    this.load.image('card2', card2)
    this.load.image('card3', card3)
    this.load.image('card4', card4)
    this.load.image('card5', card5)
  } 

  create() {
    this.scene.start('GameScene', { isRestart: true })
  }
}