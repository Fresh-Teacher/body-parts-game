/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Hand extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Hand", "./Hand/costumes/Hand.png", { x: 74, y: 78 })
    ];

    this.sounds = [new Sound("hand", "./Hand/sounds/hand.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked2)
    ];
  }

  *whenthisspriteclicked() {
    yield* this.playSoundUntilDone("hand");
  }

  *whenthisspriteclicked2() {
    yield* this.sayAndWait("hand", 2);
  }
}
