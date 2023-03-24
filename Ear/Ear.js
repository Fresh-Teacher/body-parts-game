/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Ear extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Ear", "./Ear/costumes/Ear.png", { x: 53, y: 59 })
    ];

    this.sounds = [new Sound("ear", "./Ear/sounds/ear.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked2)
    ];
  }

  *whenthisspriteclicked() {
    yield* this.playSoundUntilDone("ear");
  }

  *whenthisspriteclicked2() {
    yield* this.sayAndWait("ear", 2);
  }
}
