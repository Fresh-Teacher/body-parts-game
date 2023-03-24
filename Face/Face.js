/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Face extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Face", "./Face/costumes/Face.png", { x: 76, y: 78 })
    ];

    this.sounds = [new Sound("face", "./Face/sounds/face.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked2)
    ];
  }

  *whenthisspriteclicked() {
    yield* this.playSoundUntilDone("face");
  }

  *whenthisspriteclicked2() {
    yield* this.sayAndWait("face", 2);
  }
}
