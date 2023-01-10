import { GameObjects, Scene } from 'phaser'

export class Card extends GameObjects.Sprite {

  constructor(scene: Scene, x: number, y: number) {
    super(scene, x, y, 'card')

    this.scene.add.existing(this)

    this.setInteractive()
  }
}