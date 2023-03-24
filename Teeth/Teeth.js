/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Teeth extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Teeth", "./Teeth/costumes/Teeth.png", { x: 56, y: 59 })
    ];

    this.sounds = [new Sound("teeth", "./Teeth/sounds/teeth.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked2)
    ];
  }

  *whenthisspriteclicked() {
    yield* this.playSoundUntilDone("teeth");
  }

  *whenthisspriteclicked2() {
    yield* this.sayAndWait("teeth", 2);
  }
}
