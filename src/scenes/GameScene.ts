import { Scene } from 'phaser'
import { Card } from '../Card'

export class GameScene extends Scene {

  constructor() {
    super('GameScene')
  }

  onCardClick(_: unknown, object: unknown) {
    console.log(_)
    console.log('click :>> ')
    console.log('object :>> ', object)
  }

  create() {
    const card = new Card(this, 250, 500)

    this.input.on('gameobjectdown', this.onCardClick)
    
  }
}