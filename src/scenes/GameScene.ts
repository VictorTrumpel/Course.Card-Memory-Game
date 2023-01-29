import { Scene } from 'phaser'
import { Card } from '../Card'
import { CardDealer } from '../CardDealer'
import { MemoDOM } from '../MemoDOM'

type SceneCreateProps = {
  isRestart?: boolean
}

export class GameScene extends Scene {
  private _cardDealer: CardDealer

  private _menuDOM: MemoDOM

  onStartGame = async () => {
    await this._cardDealer.createCards()
    this.input.on('gameobjectdown', this.onCardClick)
  }

  onRestartGame = () => {
    this.scene.restart({ isRestart: true })
  }

  onCardClick = (_: unknown, card: Card) => {
    this._cardDealer.openCard(card)
  }  

  onAllCardsOpen = () => {
    this._menuDOM.render({ type: 'end', isWin: true })
  }

  constructor() {
    super('GameScene')
  }

  async create({ isRestart }: SceneCreateProps) {
    this._cardDealer = new CardDealer(this)

    this._menuDOM = new MemoDOM()

    isRestart
      ? this.onStartGame()
      : this._menuDOM.render({ type: 'start' })

    this.initEvents()    
  }

  initEvents() {
    this._menuDOM.onStartGame = this.onStartGame
    this._menuDOM.onRestartGame = this.onRestartGame
    this._cardDealer.onAllCardsOpen = this.onAllCardsOpen
    
  }
}