import { Scene } from 'phaser'
import { Card } from '../Card'
import { CardDealer } from '../CardDealer'

export class GameScene extends Scene {

  constructor() {
    super('GameScene')
  }

  onCardClick(_: unknown, card: Card) {
    card.open()
  }

  create() {
    const cardDealer = new CardDealer(this)

    cardDealer.createCards()


    this.input.on('gameobjectdown', this.onCardClick)
    
  }
}