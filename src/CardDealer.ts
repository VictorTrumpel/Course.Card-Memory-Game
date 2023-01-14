import { CardPositon, Card } from './Card'
import { Scene } from 'phaser'
import { Utils } from 'phaser'
import gameConfig from './gameConfig'

export class CardDealer {
  private _scene: Scene

  constructor(scene: Scene) {
    this._scene = scene
  }

  createCards() {
    const possibleCardIds: Card['id'][] = ['1', '2', '3', '4', '5']
    const allCardIdsPosition = Utils.Array.Shuffle([...possibleCardIds, ...possibleCardIds])
    const cardPositions = this.getCardsPosions()

    allCardIdsPosition.forEach((cardId, idx) => {
      const { x, y } = cardPositions[idx]
      new Card(this._scene, { x, y, id: cardId })
    })
  }

  private getCardsPosions() {
    const cardsPositions: CardPositon[] = [];

    // Определяем ширину и высоту экрана
    const screenWidth = gameConfig.screenWidth
    const screenHeight = gameConfig.screenHeight

    const cardTexture = this._scene.textures.get('card').getSourceImage()

    // Определяем ширину и высоту карты
    const cardWidth = cardTexture.width;
    const cardHeight = cardTexture.height;

    // Определяем отступ между картами
    const cardMargin = 4

    // Вычисляем количество карт в ряду и количество рядов
    const cols = 5
    const rows = 2

    // Вычисляем отступ слева и сверху, чтобы расположить карты по центру экрана
    const marginLeft = (screenWidth - cardWidth * cols) / 2 + cardWidth / 2
    const marginTop = (screenHeight - cardHeight * rows) / 2 + cardHeight / 2

    // Создаем матрицу позиций для карт
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = marginLeft + col * (cardWidth + cardMargin)
        const y = marginTop + row * (cardHeight + cardMargin)
        cardsPositions.push({ x, y })
      }
    }

    return cardsPositions
  }

}