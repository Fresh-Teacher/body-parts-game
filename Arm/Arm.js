/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Arm extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Arm", "./Arm/costumes/Arm.png", { x: 79, y: 83 })
    ];

    this.sounds = [new Sound("arm", "./Arm/sounds/arm.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked2)
    ];
  }

  *whenthisspriteclicked() {
    yield* this.sayAndWait("arm", 2);
  }

  *whenthisspriteclicked2() {
    yield* this.playSoundUntilDone("arm");
  }
}
