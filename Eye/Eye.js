/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Eye extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("eye", "./Eye/costumes/eye.png", { x: 56, y: 59 })
    ];

    this.sounds = [new Sound("eye", "./Eye/sounds/eye.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked2)
    ];
  }

  *whenthisspriteclicked() {
    yield* this.sayAndWait("eye", 2);
  }

  *whenthisspriteclicked2() {
    yield* this.playSoundUntilDone("eye");
  }
}
