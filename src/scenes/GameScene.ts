import { Scene } from 'phaser'
import { Card } from '../Card'
import { CardDealer } from '../CardDealer'

export class GameScene extends Scene {
  cardDealer: CardDealer

  onCardClick = (_: unknown, card: Card) => {
    this.cardDealer.openCard(card)
  }

  onAllCardsOpen = () => {
    this.scene.restart()
  }

  constructor() {
    super('GameScene')
  }

  async create() {
    this.cardDealer = new CardDealer(this)

    await this.cardDealer.createCards()

    this.initEvents()    
  }

  initEvents() {
    this.cardDealer.onAllCardsOpen = this.onAllCardsOpen
    this.input.on('gameobjectdown', this.onCardClick)
  }
}