/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Nose extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Nose", "./Nose/costumes/Nose.png", { x: 54, y: 57 })
    ];

    this.sounds = [new Sound("nose", "./Nose/sounds/nose.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked2)
    ];
  }

  *whenthisspriteclicked() {
    yield* this.playSoundUntilDone("nose");
  }

  *whenthisspriteclicked2() {
    yield* this.sayAndWait("nose", 2);
  }
}
