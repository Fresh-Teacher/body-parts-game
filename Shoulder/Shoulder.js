/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Shoulder extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Shoulder", "./Shoulder/costumes/Shoulder.png", {
        x: 75,
        y: 75
      })
    ];

    this.sounds = [new Sound("shoulder", "./Shoulder/sounds/shoulder.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked2)
    ];
  }

  *whenthisspriteclicked() {
    yield* this.playSoundUntilDone("shoulder");
  }

  *whenthisspriteclicked2() {
    yield* this.sayAndWait("shoulder", 2);
  }
}
