/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Mouth extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Mouth", "./Mouth/costumes/Mouth.png", { x: 56, y: 59 })
    ];

    this.sounds = [new Sound("mouth", "./Mouth/sounds/mouth.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked2)
    ];
  }

  *whenthisspriteclicked() {
    yield* this.playSoundUntilDone("mouth");
  }

  *whenthisspriteclicked2() {
    yield* this.sayAndWait("mouth", 2);
  }
}
