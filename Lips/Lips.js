/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Lips extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Lips", "./Lips/costumes/Lips.png", { x: 54, y: 57 })
    ];

    this.sounds = [new Sound("lips", "./Lips/sounds/lips.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked2)
    ];
  }

  *whenthisspriteclicked() {
    yield* this.playSoundUntilDone("lips");
  }

  *whenthisspriteclicked2() {
    yield* this.sayAndWait("lips", 2);
  }
}
