/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Eyebrow extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("eyebrow", "./Eyebrow/costumes/eyebrow.png", { x: 56, y: 59 })
    ];

    this.sounds = [new Sound("eyebrow", "./Eyebrow/sounds/eyebrow.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked2),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked3),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked4)
    ];
  }

  *whenthisspriteclicked() {
    yield* this.sayAndWait("Eyebrow", 2);
  }

  *whenthisspriteclicked2() {
    yield* this.sayAndWait("Eyebrow", 2);
  }

  *whenthisspriteclicked3() {
    yield* this.sayAndWait("eyebrow", 2);
  }

  *whenthisspriteclicked4() {
    yield* this.playSoundUntilDone("eyebrow");
  }
}
