/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Torso extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Torso", "./Torso/costumes/Torso.png", { x: 79, y: 78 })
    ];

    this.sounds = [new Sound("torso", "./Torso/sounds/torso.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked2)
    ];
  }

  *whenthisspriteclicked() {
    yield* this.playSoundUntilDone("torso");
  }

  *whenthisspriteclicked2() {
    yield* this.sayAndWait("torso", 2);
  }
}
