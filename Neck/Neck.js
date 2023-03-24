/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Neck extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Neck", "./Neck/costumes/Neck.png", { x: 75, y: 75 })
    ];

    this.sounds = [new Sound("neck", "./Neck/sounds/neck.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked2)
    ];
  }

  *whenthisspriteclicked() {
    yield* this.playSoundUntilDone("neck");
  }

  *whenthisspriteclicked2() {
    yield* this.sayAndWait("neck", 2);
  }
}
