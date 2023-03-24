/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Tongue extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Tongue", "./Tongue/costumes/Tongue.png", { x: 56, y: 59 })
    ];

    this.sounds = [new Sound("tongue", "./Tongue/sounds/tongue.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked2)
    ];
  }

  *whenthisspriteclicked() {
    yield* this.playSoundUntilDone("tongue");
  }

  *whenthisspriteclicked2() {
    yield* this.sayAndWait("tongue", 2);
  }
}
