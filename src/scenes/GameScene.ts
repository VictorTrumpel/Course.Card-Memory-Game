import { Timer } from './../Timer'
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

  private _timer: Timer

  private _isGameOver: boolean

  onStartGame = async () => {
    await this._cardDealer.createCards()
    this._timer.start()
    this.input.on('gameobjectdown', this.onCardClick)
  }

  onRestartGame = () => {
    this.scene.restart({ isRestart: true })
  }

  onCardClick = (_: unknown, card: Card) => {
    if (this._isGameOver)
      return
    this._cardDealer.openCard(card)
  }  

  onTimerIsOver = () => {
    this._menuDOM.render({ type: 'end', isWin: false })
    this._isGameOver = true
  }

  onAllCardsOpen = () => {
    this._menuDOM.render({ type: 'end', isWin: true })
    this._timer.stop()
    this._isGameOver = true
  }

  constructor() {
    super('GameScene')
  }

  async create({ isRestart }: SceneCreateProps) {
    this._isGameOver = false

    this._cardDealer = new CardDealer(this)

    this._timer = new Timer(this, {
      maxTime: 30,
      x: 600,
      y: 10
    })

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
    this._timer.onTimeIsOver = this.onTimerIsOver
  }
}